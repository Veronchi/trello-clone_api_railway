import express from "express";
import ApiError from "../error/ApiError";
import Jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export default function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  try {
    if (req.method === "OPTIONS") {
      next();
    }

    if(req.headers.authorization == undefined) {
      throw ApiError.unauthorized("Unauthorized");
    } else {
      const token = req.headers.authorization.split(" ")[1];
  
      Jwt.verify(token as string, process.env.JWTSALT, (err, decode): void => {
        if(err) throw ApiError.unauthorized("Unauthorized");
        res.locals.decode = decode as JwtPayload;
      });
  
      next();
    }
    
  } catch (error) {
    next(error);
  }
}
