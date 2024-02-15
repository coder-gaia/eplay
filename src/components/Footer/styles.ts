import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
  font-size: 14px;
`
export const SectionTitle = styled.h4`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
`
export const Links = styled.ul`
  display: flex;
  margin-top: 16px;
`
export const Link = styled.a`
  color: ${colors.lightGrey};
  text-decoration: none;
  margin-right: 8px;
`
export const FooterSection = styled.div`
  margin-bottom: 64px;
`
