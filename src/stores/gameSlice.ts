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
    status: "initial" | "ingame" | "finish";
    sampleCards: ICard[];
    cards: ICard[];
    cardsFound: ICard[];
    currentCards: ICard[];
    labelResult: string;
}

// Initial state of the game
const initialState: GameState = {
    status: "initial",
    sampleCards: [
        {img: cat22, indexPair: 1},
        {img: cat113, indexPair: 2},
        {img: cat436, indexPair: 3},
        {img: cat1616, indexPair: 4},
        {img: cat2782, indexPair: 5},
        {img: cat3100, indexPair: 6},
        {img: cat3991, indexPair: 7},
        {img: cat4141, indexPair: 8}
    ],
    cards: [],
    cardsFound: [],
    currentCards: [],
    labelResult: ""
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Set game status reducer
        setGameStatus: (state, action: PayloadAction<"initial" | "ingame" | "finish">) => {
            if (action.payload === "ingame") {
                // Fulfill the deck and reset game
                state.cards = shuffle([...state.sampleCards, ...state.sampleCards]).map((card, index) => {
                    return {...card, uniqueIndex: index}
                });
                state.cardsFound = [];
                state.currentCards = [];
                state.labelResult = "";
            }
            state.status = action.payload;
        },
        setCurrentCards: (state, action: PayloadAction<ICard[]>) => {
            state.currentCards = action.payload;
        },
        addToCardsFound: (state, action: PayloadAction<ICard>) => {
            state.cardsFound.push(action.payload);
        },
        setLabelResult: (state, action: PayloadAction<string>) => {
            state.labelResult = action.payload;
        }
    }
})

export const { setGameStatus, setCurrentCards, addToCardsFound, setLabelResult } = gameSlice.actions;

export default gameSlice.reducer;