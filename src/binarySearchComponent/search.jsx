import React from 'react';
import Guess from "./guess";
import Result from "./result";

const Search = ({ upper, lower, max, yesButton, noButton, onRestart }) => {
    return (
        <div>
            {upper !== lower &&
                <Guess
                    yesButton={yesButton}
                    noButton={noButton}
                    upper={upper}
                    lower={lower}
                    max={max}
                />
            }
            {upper === lower &&
                <Result
                    res={upper}
                    onRestart={onRestart}
                />
            }
        </div>
    );
};

export default Search;
