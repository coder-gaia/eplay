import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import { Game } from '../Home'

const Product = () => {
  const { id } = useParams()

  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`).then((res) =>
      res.json().then((res) => setGame(res))
    )
  }, [id])

  if (!game) {
    return <h3>Loading</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section bgColor="black" title="About the game">
        <p>{game.description}</p>
      </Section>
      <Section bgColor="grey" title="More details">
        <p>
          <b>Platform:</b> {game.details.system} <br />
          <b>Developer:</b> {game.details.developer} <br />
          <b>Publisher:</b> {game.details.publisher} <br />
          <b>Languages:</b> Portkey Games, a subsidiary of Warner Bros.
          Interactive EntertainmentLanguages: The game supports several
          languages, including {game.details.languages.join(', ')}.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}
export default Product