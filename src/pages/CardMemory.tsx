import { useEffect, useState } from "react";
import Progress from "../components/Progress";
import { useAppDispatch, useAppSelector } from "../store";
import { setGameStatus } from "../stores/gameSlice";
import CardBoard from "../components/CardBoard";

export default function CardMemory(){
    const {status, cards} = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();


    // TODO -> Maybe in hook
    const [intervalTime, setIntervalTime] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const [totalTime, setTotalTime] = useState<number>(60000);

    const launchGame = () => {
        setRemainingTime(totalTime);
        dispatch(setGameStatus('ingame'));
    };

    // Use effect to start the timer of the game
    useEffect(() => {
        if (status === "ingame") {
            setIntervalTime(setInterval(() => {
                setRemainingTime(prev => {
                    if (prev === 1000) {
                        return 0;
                    }
                    return prev - 1000;
                })
            }, 1000));
        }
    }, [status]);

    // Use effect to finish the game and clear timer
    useEffect(() => {
        if (!remainingTime && status === "ingame") {
            dispatch(setGameStatus('finish'));
            clearInterval(intervalTime);
        }
    }, [remainingTime]);







    return (
        <main id="card-memory">
            <h1>Bienvenue dans le jeu "Card memory"</h1>
            <p>Dans ce jeu, vous devez retrouver toutes les paires identiques en 60 secondes</p>
            <p>Pour commencer le jeu, cliquer sur le bouton démarrer</p>
            <div id="game-board">
                {
                    status === "initial" || status === "finish" ? 
                        <button id="launch-game" onClick={() => launchGame()}>
                            {
                                status === "initial" ? "Demarrer le jeu (60s)"
                                : "Relancer une partie (60s)"
                            }
                        </button>
                    : ""
                }
                {
                    status === "ingame" || status === "finish" ? 
                        <>
                            <CardBoard cards={cards}/>
                            {
                                status === "ingame" && (<Progress totalTime={totalTime} remainingTime={remainingTime}/>) 
                            }
                        </>
                    : ""
                }                
            </div>
        </main>
    )
}