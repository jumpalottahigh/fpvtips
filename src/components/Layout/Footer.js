import React from 'react'
import styled from 'styled-components'
import { FaTwitter, FaInstagram } from 'react-icons/fa'

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  padding: 1.5rem 1.5rem 4.5rem;
  text-align: center;

  h5 {
    margin: 0;
  }

  a {
    font-size: 0.9rem;
  }
`

const SocialIcons = styled.div`
  margin-bottom: 1rem;

  .icon {
    margin-right: 1rem;
    font-size: 2rem;
  }

  .icon:hover {
    transform: scale(1.2);
    transition: all ease-in 175ms;
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <SocialIcons>
          <a
            href="https://www.instagram.com/fpvtips"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="icon" aria-label="Instagram" />
          </a>
          <a
            href="https://twitter.com/fpvtips"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="icon" aria-label="Twitter" />
          </a>
        </SocialIcons>
        <h5>
          Copyright &copy; 2018-2019 Georgi Yanev.
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
