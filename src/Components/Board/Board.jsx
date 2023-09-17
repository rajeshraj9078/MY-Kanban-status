import React from 'react';
import { motion } from 'framer-motion';
import Progressbar from '../Progress/Progressbar';
import './Board.css';
import Card from '../Cards/card'; // Adjusted import

function Board() {
  // Implement logic to group and sort tickets based on user selections

  return (
    <div>
      <motion.div animate={{ y: -75, scale: 1 }} initial={{ scale: 0 }} className="card text-center">
        <div className="card-header text-white">
          <h6>Progress status</h6>
        </div>
        <div className="card-body">
          <div className='Progrss'>
            <Progressbar />
            <Card /> 
          </div>
        </div>
        <div className="card-footer text-white">
          Last updates.
        </div>
      </motion.div>
    </div>
  );
}

export default Board;
