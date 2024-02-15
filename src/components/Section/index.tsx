import { Container, Title } from './styles'

export type Props = {
  title: string
  children: JSX.Element
  bgColor: 'grey' | 'black'
}

const Section = ({ title, bgColor, children }: Props) => {
  return (
    <Container bgColor={bgColor}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </Container>
  )
}
export default Section
