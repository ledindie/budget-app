'use client';

import { useState } from 'react';

export default function HomePage() {
  const [netIncome, setNetIncome] = useState('');
  const [netTarget, setNetTarget] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!netIncome || !netTarget) return;
    setSubmitted(true);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>💼 Sales Budget Setup</h1>

      {!submitted ? (
        <>
          <p>Enter your actual monthly income and your income target.</p>

          <div style={{ marginBottom: '1rem' }}>
            <input
              type="number"
              placeholder="Net Monthly Income"
              value={netIncome}
              onChange={(e) => setNetIncome(e.target.value)}
              style={{ marginRight: '1rem' }}
            />
            <input
              type="number"
              placeholder="Target Monthly Income"
              value={netTarget}
              onChange={(e) => setNetTarget(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>Set My Income</button>
        </>
      ) : (
        <>
          <h2>🧮 Income Breakdown</h2>
          <p><strong>Net Monthly Income:</strong> ${parseFloat(netIncome).toFixed(2)}</p>
          <p><strong>Target Monthly Income:</strong> ${parseFloat(netTarget).toFixed(2)}</p>
          
        </>
      )}
    </main>
  );
}

