import React from 'react'
import { useParams } from 'react-router-dom'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

import ContactList from './components/contactList'
import MsgHistory from './components/msgHistory'
import MsgEditor from './components/msgEditor'

interface ChatParams {
  id: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: '100vh',
      padding: 0,
    },
    msgArea: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
)

export default function Chat() {
  const classes = useStyles()
  const { id } = useParams<ChatParams>()

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <ContactList />
        </Grid>
        <Grid item xs={9} className={classes.msgArea}>
          <MsgHistory />
          <MsgEditor />
        </Grid>
      </Grid>
    </Container>
  )
}
