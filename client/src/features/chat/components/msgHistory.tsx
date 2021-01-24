import React, { useState } from 'react'

import { List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/Person'

interface Message {
  senderName: string
  msgText: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '80vh',
      maxHeight: '100%',
      overflow: 'auto',
    },
  })
)

export default function MsgHistory() {
  const classes = useStyles()
  const [messages, setMessages] = useState([
    { msgText: 'Даров', senderName: 'My lovely choomba' },
    { msgText: 'Привет', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'My lovely choomba' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    { msgText: 'Hello', senderName: 'Leonid' },
    {
      senderName: 'My lovely choomba',
      msgText:
        'Every day we come across a lot of situations and we work really hard to crack all the issues. We deserve to lighten up our mood after a hectic day.',
    },
  ] as Message[])

  function renderMsg() {
    const listItems = messages.map((m, i) => (
      <ListItem alignItems="flex-start" key={i}>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          primary={m.senderName}
          secondary={<React.Fragment>{m.msgText}</React.Fragment>}
          secondaryTypographyProps={{ component: 'span' }}
        />
      </ListItem>
    ))
    return listItems
  }

  return <List className={classes.root}>{renderMsg()}</List>
}
