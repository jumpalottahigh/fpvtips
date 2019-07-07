import React from 'react'
import { Link } from 'gatsby'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Home from '@material-ui/icons/Home'
import Map from '@material-ui/icons/Language'
import Weather from '@material-ui/icons/WbSunny'
import Videocam from '@material-ui/icons/Videocam'
import Work from '@material-ui/icons/Work'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import Translate from '@material-ui/icons/Translate'
import Check from '@material-ui/icons/Check'

import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const mainMenuListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <Home color="primary" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to="/fpv-map/">
      <ListItem button>
        <ListItemIcon>
          <Map color="primary" />
        </ListItemIcon>
        <ListItemText primary="FPV map" />
      </ListItem>
    </Link>
    <Link to="/weather/">
      <ListItem button>
        <ListItemIcon>
          <Weather color="primary" />
        </ListItemIcon>
        <ListItemText primary="Weather" />
      </ListItem>
    </Link>
    <Link to="/videos/">
      <ListItem button>
        <ListItemIcon>
          <Videocam color="primary" />
        </ListItemIcon>
        <ListItemText primary="Videos" />
      </ListItem>
    </Link>
    <Link to="/blog/">
      <ListItem button>
        <ListItemIcon>
          <LibraryBooks color="primary" />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItem>
    </Link>
    <Link to="/dictionary/">
      <ListItem button>
        <ListItemIcon>
          <Translate color="primary" />
        </ListItemIcon>
        <ListItemText primary="Dictionary" />
      </ListItem>
    </Link>
    <Link to="/tools/">
      <ListItem button>
        <ListItemIcon>
          <Work color="primary" />
        </ListItemIcon>
        <ListItemText primary="Tools" />
      </ListItem>
    </Link>
    <Link to="/getting-started/">
      <ListItem button>
        <ListItemIcon>
          <Check color="primary" />
        </ListItemIcon>
        <ListItemText primary="Getting started" />
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
