import React, { useState } from 'react';

function FetchForm() {
  const [key, setKey] = useState('');
  const [fetchedValue, setFetchedValue] = useState('');

  const handleGetValue = async () => {
    const response = await fetch(`http://localhost:8080/api/cache/get?key=${key}`);
    if (!response.ok) {
        alert('Key not found or expired')
        setFetchedValue('Key not found or expired')
    }else{
        const data = await response.json();
        setFetchedValue(data.value);
    }
   
  };

  return (
    <div className="form">
      <h2>Get Value by Key</h2>
      <input
        type="text"
        placeholder="Key"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <button onClick={handleGetValue}>Get Value</button>
      <p>Value: {fetchedValue}</p>
    </div>
  );
}

export default FetchForm;
