import express, { Request,Response,NextFunction} from 'express';
import {json} from 'body-parser';

import  todoRoutes from './routes/todo'



const app = express();
//body parse middleware
app.use(json())


app.use('/todo',todoRoutes);

app.use( (err:Error,req: Request,res: Response, next:NextFunction) => {
    res.status(500).json({message:err.message});
})


app.listen(3000,() => {
    console.log("Server Started");
});