import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CartButton, HeaderBar, Links, LinksItem } from './styles'
import logo from '../../assets/images/logo.svg'
import cartLogo from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

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
          <CartButton onClick={openCart}>
            {items.length} - item(s) in the cart{' '}
            <img src={cartLogo} alt="cart-logo" />
          </CartButton>
        </div>
      </HeaderBar>
    </>
  )
}

export default Header
