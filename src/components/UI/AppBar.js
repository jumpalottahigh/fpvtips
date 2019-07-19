import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import Drawer from './Drawer'

import logo from '../../assets/logo.svg'

const activeStyle = {
  borderBottom: '2px solid #0474dc',
  paddingBottom: '8px',
  transition: 'all 275ms ease-in-out',
}

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

  @media (min-width: 650px) {
    display: block;
  }
`

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div
      className={classes.root}
      style={{ top: 0, position: 'sticky', zIndex: 99 }}
    >
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <div className={classes.flex}>
            <Brand to="/">
              <img src={logo} style={{ height: '48px' }} alt="FPVTIPS" />
            </Brand>
          </div>
          <NavLinks>
            <Link exact="true" to="/" activeStyle={activeStyle}>
              <Button color="default">Home</Button>
            </Link>
            <Link to="/fpv-map/" activeStyle={activeStyle}>
              <Button color="primary">Map</Button>
            </Link>
            <a href="https://www.etsy.com/shop/fpvtips/">
              <Button color="default">Shop</Button>
            </a>
            <Link to="/videos/" activeStyle={activeStyle}>
              <Button color="default">Videos</Button>
            </Link>
            <Link to="/blog/" activeStyle={activeStyle}>
              <Button color="default">Blog</Button>
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
