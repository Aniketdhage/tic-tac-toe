import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `Winner is ${winner} 😄`}
      {!winner && !noMovesLeft && `next player ${current.isXnext ? 'x' : '0'}`}
      {!winner && noMovesLeft && `The Match Draw 😐`}
    </h2>
  );
};

export default StatusMessage;
