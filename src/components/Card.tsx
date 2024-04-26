export interface ICard{
    img: string;
    indexPair: number;
    uniqueIndex?: number;
}
export interface ICardGame extends ICard{
    hidden: boolean;
    selectCard: () => void;
}


export default function Card({img, selectCard, hidden}: ICardGame){

    return (
        <li className={`cards${hidden ? " hidden" : ""}`} onClick={() => selectCard()}>
            <img src={img} alt=""/>
        </li>
    )
}