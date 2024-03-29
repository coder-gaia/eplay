import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  cursor: pointer;
`
export const Action = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
`
export const Item = styled.li`
  position: relative;
  cursor: zoom-in;

  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.4s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content:center;
  align-items: center;

  &.visible{
    display: flex;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    position: absolute;
    top: 0;
    left: 0;
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  z-index: 1;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .imgWrapper,
  iframe {
    display: block;
    max-width: 100%;
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
