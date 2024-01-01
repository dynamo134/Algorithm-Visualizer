import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const EntryPoint = ({ upper, startGame, setUpper }) => {
    const [error, setError] = useState(false);

    const getData = (e) => {
        const inputValue = e.target.value;

        if (inputValue !== "") {
            console.log(inputValue);
            setUpper(inputValue);
        } else {
            setUpper(100);
        }
    };

    return (
        <div>
            <TextField
                error={error}
                id="standard-error-helper-text"
                label="Upper Number"
                type="number"
                variant="outlined"
                onChange={getData}
            /> <br /><br />
            <h1>
                Guess a number between 0 and {upper}
            </h1>
            <br />
            <button
                className='btn btn-warning btn-lg'
                onClick={startGame}
            >
                Start the game
            </button>
        </div>
    );
};

export default EntryPoint;
