import { Link } from 'react-router-dom'
import { HeaderBar, LinkCart, Links, LinksItem } from './styles'
import logo from '../../assets/images/logo.svg'
import cartLogo from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <Link to={'./'}>
            {' '}
            <img src={logo} alt="eplay" />
          </Link>
          <nav>
            <Links>
              <LinksItem>
                <Link to={'/categories'}>Categories</Link>
              </LinksItem>
              <LinksItem>
                <a href="#">News</a>
              </LinksItem>
              <LinksItem>
                <a href="#">Promotions</a>
              </LinksItem>
            </Links>
          </nav>
        </div>
        <div>
          <LinkCart href="#">
            0 - item(s) in the cart <img src={cartLogo} alt="cart-logo" />
          </LinkCart>
        </div>
      </HeaderBar>
    </>
  )
}

export default Header
