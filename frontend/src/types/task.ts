export interface Task {
  id: number;
  title: string;
  status: 'Pendiente' | 'En progreso' | 'Completado';
  due_date?: string;
}

export type CreateTaskInput = {
  title: string;
  due_date: string | null;
};