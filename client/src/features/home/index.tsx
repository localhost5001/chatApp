import React, { useState } from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'

export default function Home() {
  const [userName, setUserName] = useState('choomba')

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center" height="100vh">
        <TextField
          label="Username"
          variant="outlined"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          fullWidth
          autoFocus
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Go online
        </Button>
      </Box>
    </Container>
  )
}
