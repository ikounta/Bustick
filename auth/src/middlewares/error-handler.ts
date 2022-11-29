import { Request, Response, NextFunction } from "express";
import { DatabaseConnectionError } from "./database-connection-error";
import { RequestValidationError } from "./request-validation-error";

export const errorHandler = (error:Error,req:Request, res: Response, next: NextFunction) => {

    if(error instanceof RequestValidationError){
        console.log('RequestValidationError error');
    }
    if(error instanceof DatabaseConnectionError){
        console.log('DatabaseConnectionError error');
    }

    res.status(400).send({message: 'We got an issue!'});
}