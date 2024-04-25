import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface GameState {
    status: "initial" | "ingame" | "finish"
}

// Define the initial state using that type
const initialState: GameState = {
    status: "initial"
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        // Set game reducer
        setGameStatus: (state, action: PayloadAction<"initial" | "ingame" | "finish">) => {
            state.status = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setGameStatus } = gameSlice.actions;

export default gameSlice.reducer;