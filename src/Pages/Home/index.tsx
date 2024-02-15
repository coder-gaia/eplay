import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    cover: string
    thumbnail: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [promotions, setPromotions] = useState<Game[]>([])
  const [soon, setSoon] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes').then((res) =>
      res.json().then((res) => setPromotions(res))
    )

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve').then((res) =>
      res.json().then((res) => setSoon(res))
    )
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promotions} bgColor="black" title="Promotions" />
      <ProductsList games={soon} bgColor="grey" title="Soon" />
    </>
  )
}

export default Home
