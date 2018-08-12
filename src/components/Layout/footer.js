import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  height: 3.5rem;
  text-align: center;

  h5 {
    margin: 0;
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <h5>
          Copyright &copy; 2018 Georgi Yanev.
          <br />
          Dedicated to Sofi and little Anton{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </h5>
      </StyledFooter>
    )
  }
}
