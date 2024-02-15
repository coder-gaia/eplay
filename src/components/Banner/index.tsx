import { Image, Prices, Title } from './styles'
import Tag from '../Tag'
import { useEffect, useState } from 'react'
import { Game } from '../../Pages/Home'
import { priceFormater } from '../ProductsList'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque').then((res) =>
      res.json().then((res) => setGame(res))
    )
  }, [])

  if (!game) {
    return <h3>Loading</h3>
  }

  return (
    <>
      <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
        <div className="container">
          <Tag size="big">Today&apos;s highlight</Tag>
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
