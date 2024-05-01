import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --fonte: 'Montserrat', sans-serif;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: var(--fonte);
  margin: 0;    
  padding: 0;
}
`