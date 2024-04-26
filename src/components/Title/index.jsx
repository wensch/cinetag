import styled from "styled-components"

const Text = styled.div`
  h1 {
    font-size: 32px;
    font-weight: 500;
    text-align: center;
  }
`

const Title = ({children}) => {
  return (
    <Text>
      {children}
    </Text>
  )
}

export default Title