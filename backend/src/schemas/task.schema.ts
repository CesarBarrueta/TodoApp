import { z } from 'zod';

export const TaskSchema = z.object({
  id: z.number({ invalid_type_error: "El ID debe ser un número" }),
  title: z.string()
    .min(3, "Mínimo 3 caracteres")
    .max(255, "Máximo 255 caracteres"),
  status: z.enum(['Pendiente', 'En progreso', 'Completado'], {
    error_Map: () => ({ message: "Status debe ser: Pendiente, En progreso o Completado" })
  }).default('Pendiente'),
  due_date: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato debe ser YYYY-MM-DD")
    .nullable()
    .optional()
});

export const CreateTaskSchema = TaskSchema.omit({ id: true });
export const UpdateStatusSchema = TaskSchema.pick({ id: true, status: true });
