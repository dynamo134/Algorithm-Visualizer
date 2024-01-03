import React from 'react';
import './cell.css';

// Functional component Cell
const Cell = ({ cell }) => {
    // Helper function to determine the CSS class based on cell properties
    const getClass = () => {
        const { val, isVisiting, isChecking, isPrime } = cell;

        // Determine the CSS class based on cell properties
        if (isPrime) {
            return "cell cell-prime bg-success text-light m-2";
        } else if (isVisiting) {
            return "cell cell-visiting m-2";
        } else if (isChecking) {
            return "cell cell-check m-2";
        } else {
            return "cell m-2";
        }
    };

    // Render the cell with the determined CSS class and value
    return (
        <div className={getClass()}>
            <span>{cell.val}</span>
        </div>
    );
};

export default Cell;
