import type { Task } from '../types/task';

interface Props {
  task: Task;
  onUpdate: (id: number, currentStatus: string) => void;
}

export const TaskItem = ({ task, onUpdate }: Props) => {
  return (
    <div style={{ 
      padding: '15px', 
      border: '1px solid #f0f0f0', 
      borderRadius: '8px', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: task.status === 'Completado' ? '#fdfdfd' : 'white'
    }}>
      <div style={{ flex: 1, paddingRight: '10px' }}>
        <div style={{ 
          fontWeight: '600', 
          color: task.status === 'Completado' ? '#999' : '#333',
          textDecoration: task.status === 'Completado' ? 'line-through' : 'none' 
        }}>
          {task.title}
        </div>
        <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>
          {task.due_date ? `📅 ${task.due_date}` : 'Sin fecha'} • <strong>{task.status}</strong>
        </div>
      </div>
      
      {task.status !== 'Completado' && (
        <button 
          onClick={() => onUpdate(task.id, task.status)}
          style={{ 
            padding: '6px 12px', 
            fontSize: '12px', 
            backgroundColor: '#e0e7ff', 
            color: '#4338ca', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          {task.status === 'Pendiente' ? 'Empezar' : 'Hecho'}
        </button>
      )}
    </div>
  );
};