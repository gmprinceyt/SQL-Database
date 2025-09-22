import type { NextFunction, Response,Request } from "express";
import jwt from "jsonwebtoken";

/**
 * inside req.headers.authorization;
 * Authorization - Bearer token
*/

export  const Auth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  // Header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new Error("Unauthorizad"));
  }

  //Token Check
  const token = authHeader.split(" ")[1];
  if (!token) {
    return next(new Error("Token Failed!"));
  }

  // Jwt
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    return next(
      new Error("JWT_SECRET is not defined in environment variables")
    );
  }

  try {
    const decode = jwt.verify(token, JWT_SECRET) as {
      email: string;
      id: number;
    };
    req.user = decode;
    next();
  } catch (error) {
    next(new Error("Unauthorizad"));
  }
};
