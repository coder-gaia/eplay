import { Game } from '../../Pages/Home'
import Product from '../Product'
import { Container, List, Title } from './styles'

export type Props = {
  title: string
  bgColor: 'grey' | 'black'
  games: Game[]
  id?: string
}
export const priceFormater = (price = 0) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

const ProductsList = ({ title, bgColor, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.releaseDate) {
      tags.push(game.releaseDate)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount} %`)
    }

    if (game.prices.current) {
      tags.push(priceFormater(game.prices.current))
    }
    return tags
  }

  return (
    <Container bgColor={bgColor} id={id}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
                id={game.id}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}
export default ProductsList
