import type { Request } from "express";
import type { UserCreateQuery, UserLoginQuery } from "../types/type.js";
import { prisma } from "../db/prisma.js";
import { Router } from "express";
import jwt from "jsonwebtoken";

const UserRoute = Router();

// Craete Users
UserRoute.post(
  "/register",
  async (req: Request<{}, {}, UserCreateQuery>, res, next) => {
    try {
      // Pending -  Vailidation Check ?
      const { email, firstName, password, lastName } = req.body;

      if (!email || !firstName || !password) {
        return next(new Error("all field are Required!"));
      }

      // Check Existing User;
      const IsExistUser = await prisma.user.findUnique({
        where: { email },
        select: { id: true },
      });

      if (IsExistUser) {
        return next(new Error("User Allready Exsited!"));
      }

      // Pending - Adding Hashed Passsword ?
      const user = await prisma.user.create({
        data: {
          email,
          password,
          firstName,
          lastName,
        },
        select: {
          id: true,
          email: true,
        },
      });

      if (!process.env.JWT_SECRET) {
        return next(
          new Error("JWT_SECRET is not defined in environment variables")
        );
      }

      const token = jwt.sign(user, process.env.JWT_SECRET);

      res.status(201).json({
        message: "User Created Successfully ✅",
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

UserRoute.post(
  "/login",
  async (req: Request<{}, {}, UserLoginQuery>, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new Error("all field are Required!"));
    }
    try {
      const user = await prisma.user.findUnique({
        where: { email, password },
        select: {
          id: true,
          email: true,
        },
      });
      if (!user) {
        return next(new Error("User not found please register"));
      }

      if (!process.env.JWT_SECRET) {
        return next(
          new Error("JWT_SECRET is not defined in environment variables")
        );
      }
      const token = jwt.sign(user, process.env.JWT_SECRET);

      res.status(200).json({
        message: "Login Successfully",
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

export default UserRoute;