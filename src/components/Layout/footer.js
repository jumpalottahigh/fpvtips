import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 1.5rem;
  text-align: center;

  h5 {
    margin: 0;
  }

  a {
    font-size: 0.9rem;
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
          <br />
          This project is{' '}
          <a href="https://github.com/jumpalottahigh/fpvtips">
            open source
          </a>{' '}
          and available on GitHub.
        </h5>
      </StyledFooter>
    )
  }
}
