import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const TextFields = () => {
    const [error, setError] = useState(false);

    return (
        <div>
            <TextField
                error={error}
                id="standard-error-helper-text"
                label="Upper Number"
                type="number"
                variant="outlined"
            />
        </div>
    );
};

export default TextFields;
