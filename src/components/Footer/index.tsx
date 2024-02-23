import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categories</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link to="/categories#rpg" title="click here to get RPG games">
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#action"
                title="click here to get action games"
              >
                Action
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#sports"
                title="click here to get sports games"
              >
                Sports
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#fight"
                title="click here to get fight games"
              >
                Fight
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/categories#simulation"
                title="click here to get simulation games"
              >
                Simulation
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Quick access</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                to="/#on-sale"
                title="click here to get games on promotions"
              >
                Promotions
              </S.Link>
            </li>
            <li>
              <S.Link
                to="/#coming-soon"
                title="click here to see the next releases"
              >
                Soon
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>{currentYear} - &copy; E-Play - All rights reserved</p>
      </div>
    </S.Container>
  )
}
export default Footer
