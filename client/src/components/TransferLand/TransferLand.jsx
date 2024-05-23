import React, { useState } from 'react';

function TransferLand() {
  const [landId, setLandId] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your contract's transferLand function here
    alert(`Land transferred: ${landId} to ${recipient}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-5 text-center">Transfer Land</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          placeholder="Land ID"
          value={landId}
          onChange={(e) => setLandId(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Transfer Land
        </button>
      </form>
    </div>
  );
}

export default TransferLand;
