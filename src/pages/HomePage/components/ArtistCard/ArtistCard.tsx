import './ArtistCard.scss'

interface ArtistCardProps {
  artist: ArtistDto;
}

export interface ArtistDto {
  counter: number;
  name?: string;
  amount: number;
  avatar: string;
}

export const ArtistCard = (props: ArtistCardProps) => {
  const { counter, name, amount} = props.artist;

  return (
    <div>
      ArtistCard
      <div>counter: {counter}</div>
      <div>name: {name}</div>
      <div>amount: {amount}</div>
    </div>
  )
}
