import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(false);

  const handleClick = position => {
    if (board[position]) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'x' : '0';
        }
        return square;
      });
    });
    setisXnext(prev => !prev);
  };
  const renderSquire = position => {
    return (
      <Square value={board[position]} onClick={() => handleClick(position)} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquire(0)}
        {renderSquire(1)}
        {renderSquire(2)}
      </div>
      <div className="board-row">
        {renderSquire(3)}
        {renderSquire(4)}
        {renderSquire(5)}
      </div>
      <div className="board-row">
        {renderSquire(6)}
        {renderSquire(7)}
        {renderSquire(8)}
      </div>
    </div>
  );
};

export default Board;
