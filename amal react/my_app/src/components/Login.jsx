import { TextField,Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
          <h2 align="center"> Login Page</h2>
          <TextField label="name" variant="filled" /><br /><br />
          <TextField label="Password" variant="filled"></TextField><br/><br />
          <Button variant="contained">Login</Button> &nbsp;
          <Button variant="contained">Clear</Button>
          
    </div>
  )
}

export default Login
