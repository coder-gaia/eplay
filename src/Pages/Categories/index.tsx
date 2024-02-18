import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery
} from '../../services/Api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportsGames } = useGetSportsGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: simuluationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (
    actionGames &&
    sportsGames &&
    fightGames &&
    simuluationGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList
          games={actionGames}
          bgColor="grey"
          title="Action"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          bgColor="black"
          title="Sports"
          id="sports"
        />
        <ProductsList
          games={simuluationGames}
          bgColor="grey"
          title="Simulation"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          bgColor="black"
          title="Fight"
          id="fight"
        />
        <ProductsList games={rpgGames} bgColor="grey" title="RPG" id="rpg" />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Categories
