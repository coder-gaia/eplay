import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import { priceFormater } from '../ProductsList'
import { Link } from 'react-router-dom'
import Button from '../Button'
import { useGetFeaturedGameQuery } from '../../services/Api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Loading</h3>
  }

  return (
    <>
      <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
        <div className="container">
          <Tag size="big">Today&apos;s feature</Tag>
          <div>
            <Title>{game.name}</Title>
            <Prices>
              From <span>${priceFormater(game.prices.old)}</span>
              <br />
              To only ${priceFormater(game.prices.current)}
            </Prices>
          </div>
          <Link to={`/product/${game.id}`}>
            <Button type="button" title="click here to obtain">
              Get now
            </Button>
          </Link>
        </div>
      </Image>
    </>
  )
}
export default Banner
