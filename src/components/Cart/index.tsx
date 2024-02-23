import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'
import ParseToUsd, { getTotalPrice } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{ParseToUsd(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} game(s) in the cart</S.Quantity>
            <S.Prices>
              Subtotal: ${ParseToUsd(getTotalPrice(items))}
              <span>or 6x interest-free installments</span>
            </S.Prices>

            <Button
              title="Click here to continue the purchase"
              type="button"
              variant="primary"
              onClick={goToCheckout}
            >
              Continue purchase
            </Button>
          </>
        ) : (
          <p className="empty-text">
            The cart is empty, add at least 1 product to finish the purchase.
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}
export default Cart
