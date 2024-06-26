import Card, { ICard } from "./Card";

interface ICardList{
    cards: ICard[];
    currentCards: ICard[]; 
    cardsFound: ICard[];
    selectCard: (card: ICard) => void;
    result?: string;
}

export default function CardList({cards, cardsFound, currentCards, selectCard, result}: ICardList){
    return (
        <ul id="card-board" className={`d-flex flex-wrap justify-center ${result?.includes('Dommage') ? "bg-error" : result?.includes('Félicitation') ? "bg-success" : "bg-grey"}`}>
            {
                cards.map((card, index) => {
                    return (
                        <Card 
                            hidden={!currentCards.find(c => c.uniqueIndex === card.uniqueIndex) && !cardsFound.find(c => c.indexPair === card.indexPair)}
                            key={index} 
                            indexPair={card.indexPair} 
                            img={card.img} 
                            selectCard={() => selectCard(card)}
                        /> 
                    )
                })
            }
        </ul>
    )
}