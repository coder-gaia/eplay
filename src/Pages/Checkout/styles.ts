import styled from 'styled-components'
import { breakPoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    margin: 16px;
  }

  margin-top: ${(props) => props.marginTop || '0'};
`
export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  @media (max-width: ${breakPoints.tablet}) {
    margin: 16px;
  }

  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0px 8px;
    width: 100%;

    &.error {
      border: 3px solid red;
    }
  }
`
export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  height: 32px;
  border: none;
  margin-right: 16px;
  padding: 0 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 16px;
    width: 100%;
  }
`
export const Button = styled.button`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
`
