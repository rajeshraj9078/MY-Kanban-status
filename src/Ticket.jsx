// Ticket.js
import React from 'react';

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      {/* Render ticket details */}
    </div>
  );
}

export default Ticket;
