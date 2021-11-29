import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

const Register = () => {
  const [userId, setUserId] = useState()
  const [fullname, setFullname] = useState()
  const [dob, setDOB] = useState()
  const [address, setAddress] = useState()
  const [password, setPassword] = useState()
  return (
    <Box p={2}>
      <h1>e-Survey</h1>
      <Card variant="outlined">
        <Box p={1}>
          <Box>
            <TextField value={userId} id="userId" label="User ID (email)" variant="standard" onChange={(e) => setUserId(e.target.value)} />
          </Box>
          <Box>
            <TextField margin="normal" value={fullname} id="fullname" label="Full name" variant="standard" onChange={(e) => setFullname(e.target.value)} />
          </Box>
          <Box>
            <TextField margin="normal" value={dob} id="dob" label="Date of birth" variant="standard" onChange={(e) => setDOB(e.target.value)} />
          </Box>
          <Box>
            <TextField margin="normal" value={address} id="dob" label="Home address" variant="standard" onChange={(e) => setAddress(e.target.value)} />
          </Box>
          <Box>
            <TextField margin="normal" value={password} id="password" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
          </Box>
          <Box marginTop={2}>
            <Button variant="contained">Register</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default Register