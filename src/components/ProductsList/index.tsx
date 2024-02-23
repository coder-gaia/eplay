import ParseToUsd from '../../utils'
import Loader from '../Loader'
import Product from '../Product'
import * as S from './styles'

export type Props = {
  title: string
  bgColor: 'grey' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ title, bgColor, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.releaseDate) {
      tags.push(game.releaseDate)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount} %`)
    }

    if (game.prices.current) {
      tags.push(ParseToUsd(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container bgColor={bgColor} id={id}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games &&
            games.map((game) => (
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
        </S.List>
      </div>
    </S.Container>
  )
}
export default ProductsList
