import React from 'react'
import { Link } from 'gatsby'
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
    <a href="https://github.com/jumpalottahigh">
      <ListItem button>
        <ListItemIcon>
          <FaGithub />
        </ListItemIcon>
        <ListItemText primary="Github" />
      </ListItem>
    </a>
    <a href="https://twitter.com/jumpalottahigh">
      <ListItem button>
        <ListItemIcon>
          <FaTwitter />
        </ListItemIcon>
        <ListItemText primary="Twitter" />
      </ListItem>
    </a>
    <a href="https://www.linkedin.com/in/yanevgeorgi/">
      <ListItem button>
        <ListItemIcon>
          <FaLinkedin />
        </ListItemIcon>
        <ListItemText primary="LinkedIn" />
      </ListItem>
    </a>
  </div>
)
