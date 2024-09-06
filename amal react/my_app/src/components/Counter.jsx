import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    const [val, setVal] = useState(0)

    const submitHandler = () => {
        setVal(val + 1);
    }
    const takeInput = () => {
        setVal(val - 1);
    }


    return (
        <div>
            <Typography variant='h4'>Count Number:{val}</Typography>
            <Button variant="contained" onClick={submitHandler}>+</Button> &nbsp;
            <Button variant="contained" onClick={takeInput}>-</Button>

        </div>
    )
}

export default Counter