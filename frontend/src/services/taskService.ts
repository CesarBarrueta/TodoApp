const API_URL = 'http://localhost:3000/tasks';

export const taskService = {
  async getAll(): Promise<Task[]> {
    const res = await fetch(API_URL);
    return res.json();
  },

  async create(data: CreateTaskInput): Promise<Response> {
    return fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  },

  async updateStatus(id: number, status: string): Promise<Response> {
    return fetch(API_URL, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
  }
};