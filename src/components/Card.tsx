export interface ICard{
    img: string;
    index: number;
}

export default function Card({img, index}: ICard){

    return (
        <li className="cards">
            <img src={img} alt=""/>
        </li>
    )
}