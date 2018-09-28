import styled from 'styled-components'

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0 auto;

  li:before {
    content: '${props => (props.bulletStyle ? props.bulletStyle : '⭐')}';
  }

  li {
    font-weight: bold;
    text-align: left;
  }

  @media (min-width: 650px) {
    width: 420px;
  }
`

export default FeatureList
