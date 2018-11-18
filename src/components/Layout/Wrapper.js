import styled from 'styled-components'

const Wrapper = styled.main`
  padding: 1rem;
  text-align: center;
  min-height: calc(100vh - 64px);
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#f2f1f0'};
  background-image: ${props =>
    props.backgroundImage ? props.backgroundImage : 'none'};
`

export default Wrapper
