import React from 'react'
import { Link } from 'gatsby'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LocationCity from '@material-ui/icons/LocationCity'
import Work from '@material-ui/icons/Work'
import List from '@material-ui/icons/List'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import Translate from '@material-ui/icons/Translate'

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const mainMenuListItems = (
  <div>
    <Link to="/fpv-spots">
      <ListItem button>
        <ListItemIcon>
          <LocationCity color="primary" />
        </ListItemIcon>
        <ListItemText primary="FPV spots" />
      </ListItem>
    </Link>
    <Link to="/blog">
      <ListItem button>
        <ListItemIcon>
          <LibraryBooks color="primary" />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
    </Link>
    <Link to="/dictionary">
      <ListItem button>
        <ListItemIcon>
          <Translate color="primary" />
        </ListItemIcon>
        <ListItemText primary="Dictionary" />
      </ListItem>
    </Link>
    <Link to="/tools">
      <ListItem button>
        <ListItemIcon>
          <Work color="primary" />
        </ListItemIcon>
        <ListItemText primary="Tools" />
      </ListItem>
    </Link>
    <Link to="/shopping-list">
      <ListItem button>
        <ListItemIcon>
          <List color="primary" />
        </ListItemIcon>
        <ListItemText primary="Shopping list" />
      </ListItem>
    </Link>
  </div>
)

export const socialListItems = (
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
