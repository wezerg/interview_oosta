import { useAppDispatch, useAppSelector } from "../store";
import { decrement, increment, incrementByAmount } from "../stores/gameSlice";

export default function Card(){
    const game = useAppSelector((state) => state.game.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            <span>Value {game}</span>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>Increment 2</button>
        </div>
    )
}