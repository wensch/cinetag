/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkStyle = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  padding: 1em;
  text-decoration: none;
`

const HeaderLink = ({url, children}) => {
  return (
    <LinkStyle to={url}>{children}</LinkStyle>
  )
}

export default HeaderLink