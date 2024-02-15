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
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Action</Link>
            </li>
            <li>
              <Link>Sports</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
            <li>
              <Link>Adventure</Link>
            </li>
            <li>
              <Link>Strategy</Link>
            </li>
            <li>
              <Link>Simulation</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Quick access</SectionTitle>
          <Links>
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Promotions</Link>
            </li>
            <li>
              <Link>Soon</Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-Play - All rights reserved</p>
      </div>
    </Container>
  )
}
export default Footer
