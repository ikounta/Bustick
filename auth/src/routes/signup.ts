import express, {Request,Response}  from "express";
import { body, validationResult } from "express-validator";
import { DatabaseConnectionError } from "../middlewares/database-connection-error";
import { RequestValidationError } from "../middlewares/request-validation-error";

const router = express.Router();

router.post('/api/users/signup', 
    [
        body('email')
        .isEmail()
        .withMessage('Email must be valid'),
        body('password')
        .trim()
        .isLength({min:4,max:20})
        .withMessage('Password Must be between 4 and 20 charachters')
    ],
    (req:Request, res:Response) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
       throw new RequestValidationError(errors.array());;
    }

    const {email,Password} = req.body;

    res.send('Creating User...');
    throw new DatabaseConnectionError();

})


export {router as SignUpRouter}