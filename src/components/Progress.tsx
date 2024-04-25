interface IProgress{
    totalTime: number, 
    remainingTime: number
}

export default function Progress({totalTime, remainingTime}: IProgress){
    const remaining = remainingTime ? 100 * remainingTime / totalTime : 0;
    return (
        <progress max="100" value={remaining}></progress>
    )
}