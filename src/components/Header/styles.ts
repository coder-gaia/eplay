import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  background-color: ${colors.grey};

  a,
  span {
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
  }

  h1 {
    line-height: 0;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Links} {
    @media (max-width: ${breakPoints.tablet}) {
      display: none;
    }
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinksItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakPoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    height: 2px;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakPoints.tablet}) {
    display: none;
  }
`
