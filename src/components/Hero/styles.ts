import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  width: 100%;
  height: 480px;
  position: relative;
  padding-top: 16px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    position: absolute;
    background-color: ${colors.black};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.56;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    position: relative;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  max-width: 290px;
  padding: 16px;
  background-color: ${colors.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;
  }

  span {
    display: block;
    text-decoration: line-through;
  }
`
