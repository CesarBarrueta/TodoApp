import { Request, Response } from 'express';
import { TaskModel } from '../models/task.model.js';
import { CreateTaskSchema, UpdateStatusSchema } from '../schemas/task.schema.js';

export const TaskController = {
  getTasks: async (_req: Request, res: Response) => {
    try {
      const tasks = await TaskModel.getAll();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener tareas' });
    }
  },

  createTask: async (req: Request, res: Response) => {
    const validation = CreateTaskSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json({ error: validation.error.format() });

    try {
      const newTask = await TaskModel.create(validation.data);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear' });
    }
  },

  updateTaskStatus: async (req: Request, res: Response) => {
    const validation = UpdateStatusSchema.safeParse(req.body);
    if (!validation.success) return res.status(400).json({ error: validation.error.format() });

    try {
      const updated = await TaskModel.updateStatus(validation.data);
      if (!updated) return res.status(404).json({ error: 'No existe esa tarea' });
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar' });
    }
  }
};