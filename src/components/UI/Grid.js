import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: ${props => (props.gap ? props.gap : '1rem')};

  @media (min-width: 600px) {
    grid-template-columns: repeat(
      ${props => (props.col600 ? props.col600 : 2)},
      1fr
    );
  }

  @media (min-width: 900px) {
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(
      ${props => (props.col900 ? props.col900 : 3)},
      1fr
    );
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(
      ${props => (props.col1200 ? props.col1200 : 4)},
      1fr
    );
  }
`

export default Grid
