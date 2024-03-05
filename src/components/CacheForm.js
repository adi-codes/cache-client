import React, { useState } from 'react';

function CacheForm() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [duration, setDuration] = useState(0);

  const handleSetValue = async () => {
    const response = await fetch('http://localhost:8080/api/cache/set', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key,
        value,
        duration: parseInt(duration, 10),
      }),
    });
    if (!response.ok) {
        alert('Failed to set key value pair')
        throw new Error('Failed to set key value pair');
        
    }else{
        alert('Value set successfully');
    }
    
  };

  return (
    <div className="form">
      <h2>Set Key-Value in Cache</h2>
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration in Seconds"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button onClick={handleSetValue}>Set Value</button>
    </div>
  );
}

export default CacheForm;
