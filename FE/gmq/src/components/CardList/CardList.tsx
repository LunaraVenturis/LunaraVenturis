import Card from '../Card/Card'

interface CardListProps
{
  cards : Array<{id: number, user: string, image: string}>;
}
const CardList = ({ cards } : CardListProps ) =>
{
   return (
    <div>    
        {cards.map( card => <Card key={card.id} {...card}/>)}
    </div>

   )
}

export default CardList;