import {ValidationError} from 'express-validator'

export class RequestValidationError extends Error {

    constructor(public error: ValidationError[]){
        super();

        //Only becuase we are extending a built-in class
        Object.setPrototypeOf(this,RequestValidationError.prototype);
    }
}