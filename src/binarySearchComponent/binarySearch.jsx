import React, { useState } from 'react';
import EntryPoint from "./entryPoint";
import Search from "./search";
import Navbar from "./navbar";

const BinarySearch = () => {
    const [state, setState] = useState({
        upper: 100,
        lower: 0,
        max: 100,
        isRunning: false
    });

    const handleStartGame = () => {
        setState({ ...state, isRunning: true });
    };

    const handleRestart = () => {
        setState({ isRunning: false, upper: 100, lower: 0 });
    };

    const handleYes = () => {
        const mid = Math.floor((state.upper + state.lower) / 2);
        setState({ ...state, lower: mid + 1 });
    };

    const handleNo = () => {
        const mid = Math.floor((state.upper + state.lower) / 2);
        setState({ ...state, upper: mid });
    };

    const handleSetUpper = (up) => {
        let val = parseInt(up);
        if (val <= 0) {
            val = 100;
        }
        setState({ ...state, upper: val, max: val });
    };

    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <center>
                {!state.isRunning &&
                    <EntryPoint
                        startGame={handleStartGame}
                        upper={state.upper}
                        setUpper={handleSetUpper}
                    />}
                {state.isRunning &&
                    <Search
                        yesButton={handleYes}
                        noButton={handleNo}
                        upper={state.upper}
                        lower={state.lower}
                        max={state.max}
                        onRestart={handleRestart}
                    />
                }
            </center>
        </div>
    );
};

export default BinarySearch;
