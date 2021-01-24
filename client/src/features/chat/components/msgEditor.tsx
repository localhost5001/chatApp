import React from 'react'

import { Box, Button, IconButton, TextField } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AttachmentIcon from '@material-ui/icons/Attachment'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {},
    controlBox: {},
    sendBtn: {
      marginLeft: 'auto',
    },
  })
)

export default function MsgEditor() {
  const classes = useStyles()

  return (
    <div className={classes.controlBox}>
      <TextField fullWidth multiline rows="3" className={classes.textField}></TextField>
      <Box display="flex">
        <IconButton>
          <AttachmentIcon />
        </IconButton>
        <IconButton>
          <PhotoCameraIcon />
        </IconButton>
        <Button className={classes.sendBtn}>Send</Button>
      </Box>
    </div>
  )
}
