import React from 'react';
import Cell from "./cell";
import './cells.css';

const Cells = (props) => {
    return (
        <div className="Cells">
            {props.cells.map((cell, cellidx) => (
                <Cell key={cellidx} cell={cell} />
            ))}
        </div>
    );
};

export default Cells;
