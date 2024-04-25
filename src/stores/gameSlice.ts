import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICard } from '../components/Card'
import { shuffle } from '../utils/fnc'
import cat22 from '../assets/img/cat22.jpg';
import cat113 from '../assets/img/cat113.jpg';
import cat436 from '../assets/img/cat436.jpg';
import cat1616 from '../assets/img/cat1616.jpg';
import cat2782 from '../assets/img/cat2782.jpg';
import cat3100 from '../assets/img/cat3100.jpg';
import cat3991 from '../assets/img/cat3991.jpg';
import cat4141 from '../assets/img/cat4141.jpg';

// Type of my datas
interface GameState {
    status: "initial" | "ingame" | "finish",
    sampleCards: ICard[],
    cards: ICard[]
}

// Initial state of the game
const initialState: GameState = {
    status: "initial",
    sampleCards: [
        {img: cat22, index: 1},
        {img: cat113, index: 2},
        {img: cat436, index: 3},
        {img: cat1616, index: 4},
        {img: cat2782, index: 5},
        {img: cat3100, index: 6},
        {img: cat3991, index: 7},
        {img: cat4141, index: 8}
    ],
    cards: []
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Set game status reducer
        setGameStatus: (state, action: PayloadAction<"initial" | "ingame" | "finish">) => {
            if (action.payload === "ingame") {
                // Fulfill the deck
                state.cards = shuffle([...state.sampleCards, ...state.sampleCards]);
            }
            else{
                 
            }
            state.status = action.payload;
        }
    }
})

export const { setGameStatus } = gameSlice.actions;

export default gameSlice.reducer;