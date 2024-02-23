import { Link } from 'react-router-dom'

import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/Api'
import ParseToUsd from '../../utils'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <>
      <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
        <div className="container">
          <Tag size="big">Today&apos;s feature</Tag>
          <div>
            <S.Title>{game.name}</S.Title>
            <S.Prices>
              From <span>{ParseToUsd(game.prices.old)}</span>
              <br />
              To only {ParseToUsd(game.prices.current)}
            </S.Prices>
          </div>
          <Link to={`/product/${game.id}`}>
            <Button type="button" title="click here to obtain">
              Get now
            </Button>
          </Link>
        </div>
      </S.Image>
    </>
  )
}
export default Banner
