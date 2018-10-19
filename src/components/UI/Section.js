import styled from 'styled-components'

const Section = styled.section`
  padding: 2rem 0;
  color: ${props => (props.color ? props.color + '!important' : '')};
  background-color: ${props =>
    props.bgcolor ? props.bgcolor + '!important' : ''};

  h3 {
    margin-top: 0;
  }

  p {
    max-width: 70ch;
    margin: 0 auto;
  }

  .cta-container {
    margin-top: 2rem;
  }
`

export default Section
