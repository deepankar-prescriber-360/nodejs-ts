import  { Router } from 'express'
import { createTodo,getTodos } from '../controllers/todo'
const router = Router();

router.get('/',createTodo);
 router.get('/all',getTodos);
router.patch('/:id');
router.delete('/:id');

export default router;