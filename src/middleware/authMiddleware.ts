import express from "express";
import ApiError from "../error/ApiError";
import Jwt, { JwtPayload } from "jsonwebtoken";

export default function (req: express.Request, res: express.Response, next: express.NextFunction): void {
  try {
    if (req.method === "OPTIONS") {
      next();
    }

    if(req.headers.authorization == undefined) {
      throw ApiError.unauthorized("Unauthorized");
    } else {
      const token = req.headers.authorization.split(" ")[1];
  
      Jwt.verify(token as string, "random_secret_key6", (err, decode): void => {
        if(err) throw ApiError.unauthorized("Unauthorized");
        res.locals.decode = decode as JwtPayload;
      });
  
      next();
    }
    
  } catch (error) {
    next(error);
  }
}
