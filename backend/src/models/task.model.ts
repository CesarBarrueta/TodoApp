import pool from '../config/db.js';
import { CreateTaskInput, UpdateTaskInput } from '../schemas/task.schema.js';

export const TaskModel = {
  getAll: async () => {
    const result = await pool.query('SELECT  id, title, status, due_date  FROM TASK ORDER BY id ASC');
    return result.rows;
  },

  create: async (data: CreateTaskInput) => {
    const { title, due_date, status } = data;
    const result = await pool.query(
      'INSERT INTO TASK (title, due_date, status) VALUES ($1, $2, $3) RETURNING *',
      [title, due_date, status]
    );
    return result.rows[0];
  },

  updateStatus: async (data: UpdateTaskInput) => {
    const { id, status } = data;
    const result = await pool.query(
      'UPDATE TASK SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    return result.rows[0];
  }
};