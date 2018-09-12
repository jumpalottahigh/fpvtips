import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const StyledButton = styled(Button)`
  position: fixed !important;
  right: 2rem !important;
  bottom: 5rem !important;
`

const FAB = props => (
  <StyledButton
    onClick={props.onClick}
    variant="fab"
    color="primary"
    aria-label="Add"
  >
    <AddIcon />
  </StyledButton>
)

export default FAB
