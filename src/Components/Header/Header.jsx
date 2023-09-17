import React from 'react'
import './Header.css';
import Board from '../Board/Board';

const Header = () => {
  return (
    <div>
      <div className='wrapper'>
          <div className='typing-demo mx-auto' style={{ width: "200" }}>
            <h3>Status Board....</h3>
          </div>
          <div>
            <Board />
          </div>
        </div>
    </div>
  )
}

export default Header
