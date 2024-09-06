import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState('Amal')
    var [val,setVal]=useState()
    const handleInput = (e) => {
        console.log(e.target.value)
        setFname(e.target.value)
    }
        const submitHandler = (e) => {
            console.log("clicked");
            setVal(fname);
        }
        return (
            <div>
                <Typography variant='h3'>Welcome {val} </Typography>
                <TextField variant='outlined' label="Your Name" onChange={handleInput} />
                <Button  variant="outlined" onClick={submitHandler}>submit</Button>
          

            </div>
        )
    }

    export default StateBasics