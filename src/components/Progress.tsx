interface IProgress{
    totalTime: number, 
    remainingTime: number
}

export default function Progress({totalTime, remainingTime}: IProgress){
    const remaining = remainingTime ? 100 * remainingTime / totalTime : 0;
    return (
        <div className="progress-bar bg-white">
            <div className="progress-inner bg-primary" style={{width: `${remaining ?? 0}%`}}></div>
        </div>
    )
}