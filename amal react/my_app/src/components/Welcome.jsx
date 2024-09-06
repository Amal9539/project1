import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Welcome = () => {
    const [val, setVal] = useState()
    const submitHandler = () => {
        setVal("React")
    }
    const submitHandler2= () => {
        setVal("Angular")
    }
    const submitHandler3 = () => {
        setVal("Node")
    }
    useEffect(() => {
        submitHandler()
    }, []);
  return (
    <div>
          <Typography variant="h3" >Welcome {val}</Typography>
          <Button variant="contained" onClick={submitHandler}>React</Button> &nbsp;
          <Button variant="contained" onClick={submitHandler2}>Angular</Button> &nbsp;
          <Button variant="contained" onClick={submitHandler3}>Node</Button> &nbsp;
    </div>
  )
}

export default Welcome
