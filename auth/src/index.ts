import express from 'express';
import bodyparser from 'body-parser';

import { CurrentUserRouter } from './routes/current-user';
import { SignInRouter } from './routes/signin';
import { SignOutRouter } from './routes/signout';
import { SignUpRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';


const app = express()
app.use(bodyparser.json());

app.use(CurrentUserRouter);
app.use(SignInRouter);
app.use(SignUpRouter);
app.use(SignOutRouter);

app.use(errorHandler)

app.listen('3000', ()=> {

    console.log('Listening 3000!!!');
})