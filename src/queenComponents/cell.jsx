import React from 'react';
import './style.css';
import queen from './queen.png';

// Functional component for displaying each cell in the board
const Cell = (props) => {
    // Function to determine the CSS class based on the cell's state
    const getClassName = () => {
        if (props.cell.isAttacked) {
            return "boardCell attacked";
        } else if (props.cell.isCurrent) {
            return "boardCell current";
        } else if (props.cell.isPresent) {
            return "boardCell present";
        } else if (props.cell.isChecked) {
            return "boardCell checked";
        } else {
            return "boardCell";
        }
    };

    // Function to determine the background color style based on the cell's position
    const getStyled = () => {
        if ((props.cell.row + props.cell.col) % 2 === 0) {
            return {
                backgroundColor: "white"
            };
        } else {
            return {
                backgroundColor: "grey"
            };
        }
    };

    return (
        // Cell container with dynamic class and style
        <div className={getClassName()} style={getStyled()}>
            {/* Display queen image if the cell is present */}
            {props.cell.isPresent && <img src={queen} height='100px' style={{ padding: "25px" }} />}
        </div>
    );
};

export default Cell;
