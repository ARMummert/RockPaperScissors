import React, { useState } from 'react';
import './App.css';

const choices = ['Rock', 'Paper', 'Scissors'];

const RPS: React.FC = () => {
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  
  const handleChoice = (choice: string) => {
    setUserChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    calculateWinner(choice, computerChoice);
  };

  
  const calculateWinner = (userChoice: string, computerChoice: string) => {
    if (userChoice === computerChoice) {
      setResult('You Tied!');
    } else if (
      (userChoice === 'Rock' && computerChoice === 'Scissors') ||
      (userChoice === 'Paper' && computerChoice === 'Rock') ||
      (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lost!');
    }
  };

  const handleReset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setResult('');
  };

  return (
    <div className="rps-page">
      <h1 className='rps-header'>Rock Paper Scissors</h1>
      <div className="choices">
        {choices.map(choice => (
          <button className='rps-btn' key={choice} onClick={() => handleChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div className="result">
          <p className='choices'>Your choice: {userChoice}</p>
          <p className='choices'>Computer's choice: {computerChoice}</p>
          <p className='choices'>{result}</p>
          <button className='again-btn'onClick={handleReset}>Play again</button>
        </div>
        
      )}
    </div>
  );
};


export default RPS;
