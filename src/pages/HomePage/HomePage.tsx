import './HomePage.scss'
import { ArtistCard, ArtistDto } from './components/ArtistCard/ArtistCard'

export const HomePage = () => {
  const artists: ArtistDto[] = [
    {
      name: 'name',
      amount: 2,
      avatar: "q",
    },
    {
      name: 'name2',
      amount: 20,
      avatar: "q",
    },
    {
      name: 'name3',
      amount: 200,
      avatar: "q",
    }
  ]

  return (
    <div id="home-page">
      <div>HomePage</div>
      <button className='button'>press me</button>
      {
        artists.map((artist, index) =>
          <ArtistCard 
            key={`artist-${index}`} 
            artist={{ ...artist, counter: index + 1 }}
          />
        )}
    </div>
  )
}
