import React, { useEffect, useState } from 'react';
import { getResearchTasks, approveResearchTask, rejectResearchTask } from '../api/researchApi';

function ResearchList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getResearchTasks();
        setTasks(Object.values(response.data)); 
      } catch (error) {
        console.error('GIVE TASK ERROR', error);
      }
    };
    fetchTasks();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveResearchTask(id);
      alert('ACCEPT！');
      const response = await getResearchTasks();
      setTasks(Object.values(response.data));
    } catch (error) {
      console.error('DEFEAT TO ACCEPT', error);
      alert('DEFEAT TO ACCEPT, PLZ TRY AGAIN');
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectResearchTask(id);
      alert('REJECT');
      const response = await getResearchTasks();
      setTasks(Object.values(response.data));
    } catch (error) {
      console.error('REJECT', error);
      alert('REJECT, PLZ TRY AGAIN');
    }
  };

  return (
    <div>
      <h3>TASK LIST</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} - STATUS: {task.status}
            {task.status === 'PENDING' && (
              <div>
                <button onClick={() => handleApprove(task.id)}>ACCEPT</button>
                <button onClick={() => handleReject(task.id)}>REJECT</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResearchList;