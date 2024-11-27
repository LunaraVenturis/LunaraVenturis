
interface CardProps {
    id: number;
    user: string;
    image: string;
  }
const Card = ({id, user, image} : CardProps) =>
{
    return (
    <div>
        <p>{user}</p>
        <p><img src = {image} alt ="" width ={250} height = {250} /></p>
        <p>{id}</p>
    </div>
    )
}

export default Card;