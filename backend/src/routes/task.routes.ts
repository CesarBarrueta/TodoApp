import { Router } from 'express';
import { TaskController } from '../controllers/task.controller.js';

const router = Router();

router.get('/', TaskController.getTasks);
router.post('/', TaskController.createTask);
router.patch('/', TaskController.updateTaskStatus);

export default router;