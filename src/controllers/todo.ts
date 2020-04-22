import  {RequestHandler}  from  'express';
import { Todo } from '../models/todo'

const TODOS:Todo[] = [];

export const createTodo: RequestHandler = (req,res,next) => {
        const text = (req.query as {text: string}).text;
        console.log(text);
        const newTodo = new Todo(Math.random().toString(),text);
        TODOS.push(newTodo);
        return res.status(201).json({success:true,message: "Created the todo:"})
}

export const getTodos: RequestHandler = (req,res,next) => {       
       
        return res.status(201).json({success:true,data: TODOS})
}