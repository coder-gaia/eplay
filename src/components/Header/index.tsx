import { useState } from 'react'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import cartLogo from '../../assets/images/carrinho.svg'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setMenuIsOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <S.Hamburguer onClick={() => setMenuIsOpen(!isMenuOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
        <S.LinksWrapper>
          <Link to={'./'}>
            <h1>
              <img src={logo} alt="eplay" />
            </h1>
          </Link>
          <S.Links>
            <S.LinksItem>
              <Link to={'/categories'} title="click here to see the categories">
                Categories
              </Link>
            </S.LinksItem>
            <S.LinksItem>
              <HashLink
                to="/#coming-soon"
                title="click here to see the next releases"
              >
                Soon
              </HashLink>
            </S.LinksItem>
            <S.LinksItem>
              <HashLink
                to="/#on-sale"
                title="click here to see the games on promotion"
              >
                Promotions
              </HashLink>
            </S.LinksItem>
          </S.Links>
        </S.LinksWrapper>
        <div>
          <S.CartButton role="button" onClick={openCart}>
            {items.length}
            <span> - item(s) in the cart </span>
            <img src={cartLogo} alt="cart-logo" />
          </S.CartButton>
        </div>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinksItem>
            <Link
              to={'/categories'}
              title="click here to see the categories"
              onClick={() => setMenuIsOpen(false)}
            >
              Categories
            </Link>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              to="/#coming-soon"
              title="click here to see the next releases"
              onClick={() => setMenuIsOpen(false)}
            >
              Soon
            </HashLink>
          </S.LinksItem>
          <S.LinksItem>
            <HashLink
              to="/#on-sale"
              title="click here to see the games on promotion"
              onClick={() => setMenuIsOpen(false)}
            >
              Promotions
            </HashLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
