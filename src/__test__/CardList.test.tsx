import { fireEvent, render } from '@testing-library/react';
import CardList from '../components/CardList';
import cat22 from '../assets/img/cat22.jpg';
import cat113 from '../assets/img/cat113.jpg';
import cat436 from '../assets/img/cat436.jpg';
import cat1616 from '../assets/img/cat1616.jpg';
import cat2782 from '../assets/img/cat2782.jpg';
import cat3100 from '../assets/img/cat3100.jpg';
import cat3991 from '../assets/img/cat3991.jpg';
import cat4141 from '../assets/img/cat4141.jpg';
import { ICard } from '../components/Card';

// Mock data
const mockCards: ICard[] = [
    {img: cat22, indexPair: 1},
    {img: cat113, indexPair: 2},
    {img: cat436, indexPair: 3},
    {img: cat1616, indexPair: 4},
    {img: cat2782, indexPair: 5},
    {img: cat3100, indexPair: 6},
    {img: cat3991, indexPair: 7},
    {img: cat4141, indexPair: 8}
]
const mockCardsFound: ICard[] = [];
const mockCurrentCards: ICard[] = [];
const myTestFnc = jest.fn(() => {return 'Click action fire properly'});

// Test on card list component
test("Card list render right number of cards", () => {
    const {container} = render(<CardList 
        cards={mockCards}
        cardsFound={mockCardsFound}
        currentCards={mockCurrentCards}
        selectCard={myTestFnc}
    /> );

    expect(container.querySelectorAll('li').length).toBe(8);
});
// Test on card list component
test("Card list pass event to card properly", () => {
    const {container} = render(<CardList 
        cards={mockCards}
        cardsFound={mockCardsFound}
        currentCards={mockCurrentCards}
        selectCard={myTestFnc}
    /> );
    const firstCard = container.querySelector('li');

    if (firstCard) {
        fireEvent.click(firstCard);
        expect(myTestFnc).toHaveBeenCalled();
    }
});