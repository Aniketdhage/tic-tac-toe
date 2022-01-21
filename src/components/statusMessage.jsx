import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && `next player ${current.isXnext ? 'x' : '0'}`}
      {!winner && noMovesLeft && `The Match Draw 😐`}
    </div>
  );
};

export default StatusMessage;
