import express from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
import ApiError from "../error/ApiError";

export default function (role: string) {
  
  return function (req: express.Request, res: express.Response, next: express.NextFunction): void {
    try {
      if (req.method === "OPTIONS") {
        next();
      }
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        throw ApiError.forbidden("Unauthorized");
      }

      const decode = Jwt.verify(token, "random_secret_key6") as JwtPayload;

      if (decode.includes(role)) {
        throw ApiError.forbidden("No access");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}
