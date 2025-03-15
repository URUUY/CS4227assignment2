import React, { useState } from 'react';
import { submitResearchTask } from '../api/researchApi';

function ResearchInput() {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async () => {
    if (!taskName) {
      alert('INPUT TASK NAME');
      return;
    }

    try {
      await submitResearchTask({ name: taskName });
      setTaskName(''); 
      alert('SUCCESS！');
    } catch (error) {
      console.error('DEFEAT:', error);
      alert('DEFEAT, PLZ TRY AGAIN');
    }
  };

  return (
    <div>
      <h2>APPLICATION</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="INPUT NAME"
      />
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default ResearchInput;