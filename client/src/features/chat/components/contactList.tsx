import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText, Divider, Typography, ListItemAvatar, Avatar } from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
)

export default function ChatContactList() {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText>
          <Typography variant="h6">Your name is Choomba</Typography>
        </ListItemText>
      </ListItem>

      <ListItem button alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Choomba 1"
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="textPrimary">
                You:
              </Typography>
              {'Нормас делаешь'}
            </React.Fragment>
          }
          secondaryTypographyProps={{ component: 'span' }}
        />
      </ListItem>
    </List>
  )
}
