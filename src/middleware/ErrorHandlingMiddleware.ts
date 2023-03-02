import express  from "express";
import ApiError from "../error/ApiError";

export default function (
  err: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction
  ): void {

  if(err instanceof ApiError) {
    res.status(err.status).send({
      error: err.message
    })
  } else {
    res.status(500).send({error: err.name});
  } 
}
