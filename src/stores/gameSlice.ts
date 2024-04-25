import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Type of my datas
interface GameState {
    status: "initial" | "ingame" | "finish"
}

// Initial state of the game
const initialState: GameState = {
    status: "initial"
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Set game status reducer
        setGameStatus: (state, action: PayloadAction<"initial" | "ingame" | "finish">) => {
            state.status = action.payload;
        }
    }
})

export const { setGameStatus } = gameSlice.actions;

export default gameSlice.reducer;