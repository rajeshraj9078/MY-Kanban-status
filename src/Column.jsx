// Column.js
import React from 'react';
import Ticket from './Ticket';

function Column({ title, tickets }) {
  return (
    <div className="column">
      <h2>{'Card1'}</h2>
      {/* Render Ticket components inside this column */}
    </div>
  );
}

export default Column;