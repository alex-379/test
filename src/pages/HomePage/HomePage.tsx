import './HomePage.scss'
import { ArtistCard } from './components/ArtistCard/ArtistCard'

export const HomePage = () => {
  const artist = {
    counter: 1,
    name: 'name',
    amount: 2,
    avatar: "q",
  }

  return (
    <div id="home-page">
        <div>HomePage</div>
        <div>HomePage</div>
        <div>HomePage</div>
        <div>HomePage</div>
        <button className='button'>press me</button>
        <ArtistCard artist={artist}/>
    </div>
  )
}
