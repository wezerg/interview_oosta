import { fireEvent, render } from '@testing-library/react'
import Card from '../components/Card';
import cat22 from '../assets/img/cat22.jpg';

// Test on card component
test("Card render image successfully", () => {
    const {container} = render(<Card 
        hidden={false}
        key={1} 
        indexPair={1} 
        img={cat22} 
        selectCard={() => console.log('Click action fire properly')}
    /> );

    expect(container.querySelector("img")).toBeInTheDocument();
});
test("Card is hidden successfully", () => {
    const {container} = render(<Card 
        hidden={true}
        key={1} 
        indexPair={1} 
        img={cat22} 
        selectCard={() => console.log('Click action fire properly')}
    /> );
    
    expect(container.firstChild).toHaveClass('cards hidden');
});
test("Card click event is fire successfully", () => {
    const myTestFnc = jest.fn(() => {return 'Click action fire properly'});

    const {container} = render(<Card 
        hidden={true}
        key={1} 
        indexPair={1} 
        img={cat22} 
        selectCard={myTestFnc}
    /> );
    if (container?.firstChild) {
        fireEvent.click(container.firstChild);
        expect(myTestFnc).toHaveBeenCalled();   
    }
});
