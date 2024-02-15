import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;
  z-index: 1;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 2;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    content: '';
    z-index: 1;
  }
`

export const Title = styled.h2`
  max-width: 450px;
  font-size: 32px;
  font-weight: bold;
`
export const Prices = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
