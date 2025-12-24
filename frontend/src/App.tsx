import { useEffect, useState } from 'react';
import type { Task } from './types/task';
import { taskService } from './services/taskService';
import { TaskItem } from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('');

  const loadTasks = async () => {
    const data = await taskService.getAll();
    setTasks(data);
  };

  useEffect(() => { loadTasks(); }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await taskService.create({ title: newTitle, due_date: newDueDate || new Date().toISOString().split('T')[0] });
    if (res.ok) {
      setNewTitle('');
      setNewDueDate('');
      loadTasks();
    } else {
      const err = await res.json();
      alert("Error: " + JSON.stringify(err.error));
    }
  };

  const handleUpdate = async (id: number, currentStatus: string) => {
    const nextStatus = currentStatus === 'Pendiente' ? 'En progreso' : 'Completado';
    await taskService.updateStatus(id, nextStatus);
    loadTasks();
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#585858ff', fontFamily: 'sans-serif', overflowY: 'auto' }}>
      <div style={{ width: '90%', maxWidth: '500px', backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', margin: '20px auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '25px', color: '#111827'}}>Mis Pendientes</h1>
        
        <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '30px' }}>
          <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="¿Qué tienes pendiente?" style={{ padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }} required />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '14px', color: '#666' }}>Fecha límite:</label>
            <input type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ddd' }} />
          </div>
          <button type="submit" style={{ padding: '12px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>Agregar Tarea</button>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxHeight: '400px', overflowY: 'auto' }}>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onUpdate={handleUpdate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;