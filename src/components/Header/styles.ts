import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  background-color: ${colors.grey};

  div {
    display: flex;
    align-items: center;
  }
  a {
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`
export const LinksItem = styled.li`
  margin-right: 16px;
`
export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
