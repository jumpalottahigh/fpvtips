import React from 'react'
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'

const StyledButton = styled(Fab)`
  position: fixed !important;
  right: 2rem !important;
  bottom: 5rem !important;
`

const StyledFab = props => (
  <StyledButton onClick={props.onClick} color="primary" aria-label="Add">
    <AddIcon />
  </StyledButton>
)

export default StyledFab
