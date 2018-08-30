import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
  </div>
)

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <FaGithub />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaTwitter />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaLinkedin />
      </ListItemIcon>
      <ListItemText primary="Coming soon" />
    </ListItem>
  </div>
)
