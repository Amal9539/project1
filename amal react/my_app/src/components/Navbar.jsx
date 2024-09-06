import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <Typography varient="h2">My App</Typography> &nbsp;
              <Link to='/'>
                      <Button variant="contained">Signup</Button> </Link> &nbsp;
                  <Link to='/login'>
                      <Button variant="contained">Login</Button> </Link>
                  <Link to='/state'>
            <Button variant="contained">StateBasics</Button></Link>
          <Link to='/c'>
            <Button variant='contained'>Counter</Button></Link>
          <Link to='/w'>
            <Button variant="contained">Welcome</Button></Link>
          <Link to='api'>
            <Button variant="contained">API</Button></Link>
          <Link to='/poke'>
            <Button variant="contained">POKE</Button></Link>
          

              </Toolbar>
          </AppBar><br/><br/>
    </div>
  )
}

export default Navbar
