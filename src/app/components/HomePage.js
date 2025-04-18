'use client';

import { useState } from 'react';

export default function HomePage() {
  const [checkBalance, setCheckBalance] = useState('');
  const [netIncome, setNetIncome] = useState('');
  const [netTarget, setNetTarget] = useState('');
  const [fixedExpenses, setFixedExpenses] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [budget, setBudget] = useState(null);

  const handleSubmit = () => {
    if (!checkBalance || !netIncome || !netTarget || !fixedExpenses) return;

    const parsed = {
      balance: parseFloat(checkBalance),
      baseIncome: parseFloat(netIncome),
      commission: parseFloat(netTarget),
      expenses: parseFloat(fixedExpenses),
    };

    // Validate all parsed values are numbers
    if (
      isNaN(parsed.balance) ||
      isNaN(parsed.baseIncome) ||
      isNaN(parsed.commission) ||
      isNaN(parsed.expenses)
    ) {
      return; // Don’t submit if any value is invalid
    }

    setBudget(parsed);
    setSubmitted(true);
  };

  const handleReset = () => {
    setCheckBalance('');
    setNetIncome('');
    setNetTarget('');
    setFixedExpenses('');
    setBudget(null);
    setSubmitted(false);
  };

  const formatCurrency = (value) =>
    typeof value === 'number' ? `$${value.toFixed(2)}` : '-';

  const totalIncome =
    budget &&
    typeof budget.baseIncome === 'number' &&
    typeof budget.commission === 'number'
      ? budget.baseIncome + budget.commission
      : null;

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>💼 Sales Budget Setup</h1>

      {!submitted ? (
        <>
          <p>Enter your checking account balance, monthly base income, target commission, and fixed expenses.</p>

          <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
              type="number"
              placeholder="Checking Account Balance"
              value={checkBalance}
              onChange={(e) => setCheckBalance(e.target.value)}
            />
            <input
              type="number"
              placeholder="Net Monthly Base Income"
              value={netIncome}
              onChange={(e) => setNetIncome(e.target.value)}
            />
            <input
              type="number"
              placeholder="Target Monthly Commission"
              value={netTarget}
              onChange={(e) => setNetTarget(e.target.value)}
            />
            <input
              type="number"
              placeholder="Monthly Fixed Expenses"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(e.target.value)}
            />
          </div>

          <button onClick={handleSubmit}>Set My Budget</button>
        </>
      ) : (
        <>
          <h2>🧮 Income Overview</h2>
          <p><strong>Checking Balance:</strong> {formatCurrency(budget.balance)}</p>
          <p><strong>Base Income:</strong> {formatCurrency(budget.baseIncome)}</p>
          <p><strong>Target Commission:</strong> {formatCurrency(budget.commission)}</p>
          <p><strong>Total Estimated Income:</strong> {formatCurrency(totalIncome)}</p>

          <h2>📊 Expenses</h2>
          <p><strong>Fixed Monthly Expenses:</strong> {formatCurrency(budget.expenses)}</p>

          <button onClick={handleReset} style={{ marginTop: '1rem' }}>
            Start Over
          </button>
        </>
      )}
    </main>
  );
}

