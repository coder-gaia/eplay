import { Game } from '../../Pages/Home'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { priceFormater } from '../ProductsList'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <>
      <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
        <div className="container">
          <div>
            <Tag>{game.details.category}</Tag>
            <Tag>{game.details.system}</Tag>
          </div>
          <Infos>
            <h2>{game.name}</h2>
            <p>
              {game.prices.discount && (
                <span>From {priceFormater(game.prices.old)}</span>
              )}
              <br />
              {game.prices.current && (
                <>For {priceFormater(game.prices.current)}</>
              )}
            </p>
            {game.prices.current && (
              <Button
                variant="primary"
                type={'button'}
                title={'click here to add this game to your cart'}
                onClick={addToCart}
              >
                Add to cart
              </Button>
            )}
          </Infos>
        </div>
      </Banner>
    </>
  )
}
export default Hero
