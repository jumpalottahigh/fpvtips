import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import Drawer from './Drawer'

import logo from '../../assets/logo.png'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const Brand = styled(Link)`
  &:hover {
    color: red;
    text-decoration: none;
    border-bottom: none;
  }
`

const NavLinks = styled.div`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <div className={classes.flex}>
            <Brand to="/">
              <img src={logo} style={{ height: '48px' }} alt="FPVTIPS" />
            </Brand>
          </div>
          <NavLinks>
            <Link to="/fpv-map/">
              <Button color="primary">Map</Button>
            </Link>
            <Link to="/blog/">
              <Button color="default">Blog</Button>
            </Link>
            <Link to="/dictionary/">
              <Button color="default">Dictionary</Button>
            </Link>
          </NavLinks>
          <Drawer />
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
