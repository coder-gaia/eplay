import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categories</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Action</Link>
            </li>
            <li>
              <Link to="/categories#sports">Sports</Link>
            </li>
            <li>
              <Link to="/categories#fight">Fight</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulation</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Quick access</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promotions</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Soon</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-Play - All rights reserved</p>
      </div>
    </Container>
  )
}
export default Footer
