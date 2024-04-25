import { useEffect, useState } from "react";
import Progress from "../components/Progress";
import { useAppDispatch, useAppSelector } from "../store";
import { addToCardsFound, setCurrentCards, setGameStatus, setLabelResult } from "../stores/gameSlice";
import Card, { ICard } from "../components/Card";

export default function CardMemory(){
    const {status, cards, currentCards, cardsFound, sampleCards, labelResult} = useAppSelector((state) => state.game);
    const dispatch = useAppDispatch();


    // TODO -> Maybe in hook
    const [intervalTime, setIntervalTime] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
    const [remainingTime, setRemainingTime] = useState<number>(0);
    const [totalTime, ] = useState<number>(60000);

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
            dispatch(setLabelResult('Dommage, vous avez perdu.'));
            clearInterval(intervalTime);
        }
    }, [remainingTime]);

    // Logic for click cards
    function selectCard(card: ICard){
        // Block array at 2 elements
        if (currentCards.length < 2) {
            if (currentCards.length) {// If one card is already pick
                // Early return if click on same card
                if (currentCards.find(c => c.uniqueIndex === card.uniqueIndex)) {
                    return;
                }
                if (currentCards.find(c => c.indexPair === card.indexPair)) {
                    dispatch(addToCardsFound(card));
                    dispatch(setCurrentCards([]));
                }
                else{
                    dispatch(setCurrentCards([...currentCards, card])); 
                    setTimeout(() => {
                        dispatch(setCurrentCards([]));
                    }, 700);
                }
            }
            else{
                // Pick one card if not pick yet
                if (!cardsFound.find(c => c.indexPair === card.indexPair)) {
                    dispatch(setCurrentCards([...currentCards, card]));
                }
            }
        }
    }

    // Use effect to quit the game while win
    useEffect(() => {
        if (cardsFound.length === sampleCards.length) {
            dispatch(setGameStatus("finish"));
            dispatch(setLabelResult('Félicitation, vous avez gagné !'));
            clearInterval(intervalTime);
        }
    }, [cardsFound.length, dispatch, sampleCards.length])

    return (
        <main id="card-memory">
            <h1>Bienvenue dans le jeu "Cat memory"</h1>
            <p>Dans ce jeu, vous devez retrouver toutes les paires identiques en 60 secondes</p>
            <p>Pour commencer le jeu, cliquer sur le bouton démarrer</p>
            <div id="game-board">
                {
                    !!labelResult && (<span className="label-result">{labelResult}</span>)
                }
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
                            <ul id="card-board">
                                {
                                    cards.map((card, index) => {
                                        return (
                                            <Card 
                                                hidden={!currentCards.find(c => c.uniqueIndex === card.uniqueIndex) && !cardsFound.find(c => c.indexPair === card.indexPair)}
                                                key={index} 
                                                indexPair={card.indexPair} 
                                                img={card.img} 
                                                selectCard={() => selectCard(card)}
                                            /> 
                                        )
                                    })
                                }
                            </ul>
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