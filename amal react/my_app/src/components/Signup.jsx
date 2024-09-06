import React from 'react'

const Signup = () => {
  return (
    <div>
          <h1 align="center">Signup</h1>
          First Name:<input type="text" /><br /><br />
          Last Name:<input type="text" /><br /><br />
          Password:<input type="password" name="password" id="password" />
          <br /><br />
          <input type="submit"name="submit"id="submit"/>
    </div>
  )
}

export default Signup
