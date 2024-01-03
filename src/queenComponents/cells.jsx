import React from 'react';
import Cell from "./cell";
import './style.css';

// Functional component for displaying the board cells
const Cells = (props) => {
    return (
        // Board container with margin
        <div className='board-container m-5'>
            {/* Mapping through each row in the board */}
            {props.board.map((row, rowidx) => (
                <div key={rowidx}>
                    {/* Mapping through each cell in the row */}
                    {row.map((cell, cellidx) => (
                        <Cell key={cellidx} cell={cell} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Cells;
