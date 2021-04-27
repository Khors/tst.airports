import express, { NextFunction, Response, Request } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { api } from './api';
import { connection } from './api/middlewares/connection';


const app = express();


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "*")
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
    if ('OPTIONS' === req.method.toUpperCase()) {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(async (req, res, next) => { 
    // it has to be global connection
    await connection;
    next() 
});

app.use(api);

app.use(async (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log('Enternal Server Error', err);
    if (!err.statusCode) {
        const str = err.stack.toString();
        const idx = str.indexOf('\n');
        err.statusCode = 500;
        err.responseMessage = [str.substr(0, idx)];
    }
    res.status(err.statusCode)
        .send({
            statusCode: err.statusCode,
            responseMessage: err.responseMessage
        });
});
app.listen(Number(process.env.PORT), () => {
    console.log(`Server works at ${process.env.URL}:${process.env.PORT}`)
});