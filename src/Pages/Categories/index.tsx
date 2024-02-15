import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [simuluationGames, setSimulationGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao').then((res) =>
      res.json().then((res) => setActionGames(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes').then((res) =>
      res.json().then((res) => setSportsGames(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao').then((res) =>
      res.json().then((res) => setSimulationGames(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta').then((res) =>
      res.json().then((res) => setFightGames(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg').then((res) =>
      res.json().then((res) => setRpgGames(res))
    )
  }, [])

  return (
    <>
      <ProductsList games={actionGames} bgColor="grey" title="Action" />
      <ProductsList games={sportsGames} bgColor="black" title="Sports" />
      <ProductsList
        games={simuluationGames}
        bgColor="grey"
        title="Simulation"
      />
      <ProductsList games={fightGames} bgColor="black" title="Fight" />
      <ProductsList games={rpgGames} bgColor="grey" title="RPG" />
    </>
  )
}

export default Categories
