import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import './root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `next player ${isXnext ? 'x' : '0'}`;
  const handleClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'X' : 'O';
        }
        return square;
      });
    });
    setisXnext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE By Aniket</h1>
      <h2>{message}</h2>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};

export default App;
