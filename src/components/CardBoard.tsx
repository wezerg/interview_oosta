import Card, { ICard } from "./Card";

interface ICardBoard{
    cards: ICard[];
}

export default function CardBoard({cards}: ICardBoard){
    console.log(cards);
    return (
        <ul id="card-board">
            {
                cards.map((card, index) => {
                    return (
                        <Card key={index} img={card.img} index={card.index}/> 
                    )
                })
            }
        </ul>
    )
}