import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import Video from './Video'

const StyledSection = styled.section`
  margin: 0 -1rem;
  padding: 3.5rem 1rem;
  color: ${props => (props.color ? props.color + '!important' : '')};
  background-color: ${props =>
    props.bgcolor ? props.bgcolor + '!important' : ''};
  background-image: ${props =>
    props.bgimage ? 'url(' + props.bgimage + ')!important' : ''};

  h3 {
    margin-top: 0;
  }

  p {
    max-width: 70ch;
    margin: 0 auto;
  }

  .content-container {
    text-align: left;
  }

  .cta-container {
    margin-top: 2rem;
  }
`

export default class Section extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      color,
      bgcolor,
      bgimage,
      video,
      title,
      content,
      buttons,
    } = this.props.data

    return (
      <StyledSection color={color} bgcolor={bgcolor} bgimage={bgimage}>
        <h3>{title}</h3>
        {content && (
          <div className="content-container">
            {content.map((chunk, index) => (
              <p key={index} style={index > 0 ? { marginTop: '1rem' } : {}}>
                {chunk}
              </p>
            ))}
          </div>
        )}
        {video && (
          <div style={{ maxWidth: '640px', margin: '2rem auto' }}>
            <Video width="100%" height="315" src={video} title={title} />
          </div>
        )}
        {buttons && (
          <div className="cta-container">
            {buttons.map((button, index) => {
              // Set default values in case items are null (default parameters in desctructuring did not work for me so I did it this way)
              let link = button.link == null ? '/' : button.link
              let label = button.label == null ? 'Read more' : button.label
              let variant =
                button.variant == null ? 'contained' : button.variant
              let color = button.color == null ? 'default' : button.color
              let minWidth = button.minWidth == null ? '240px' : button.minWidth
              let external = button.external == null ? false : button.external

              if (external) {
                return (
                  <a key={index} href={link}>
                    <Button
                      variant={variant}
                      color={color}
                      style={{
                        marginLeft: '0.5rem',
                        marginTop: '0.5rem',
                        minWidth,
                      }}
                    >
                      {label}
                    </Button>
                  </a>
                )
              } else {
                return (
                  <Link key={index} to={link}>
                    <Button
                      variant={variant}
                      color={color}
                      style={{
                        marginLeft: '0.5rem',
                        marginTop: '0.5rem',
                        minWidth,
                      }}
                    >
                      {label}
                    </Button>
                  </Link>
                )
              }
            })}
          </div>
        )}
      </StyledSection>
    )
  }
}
