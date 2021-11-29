import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
import { Card } from '@mui/material'

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()
  return (
    <Box p={2}>
      <h1>e-Survey</h1>
      <Card variant="outlined">
        <Box p={1}>
          <Box>
            <TextField value={username} id="username" label="Username" variant="standard" onChange={(e) => setUsername(e.target.value)} />
          </Box>
          <Box>
            <TextField value={password} margin="normal" id="username" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
          </Box>
          <Box marginTop={2}>
            <Button component="span" color="secondary" onClick={() => history.push('/register')}>Register</Button>
            <Box component="span" marginLeft={1}>
              <Button variant="contained">Login</Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}

export default Login