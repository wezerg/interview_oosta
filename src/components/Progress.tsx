interface IProgress{
    totalTime: number, 
    remainingTime: number
}

export default function Progress({totalTime, remainingTime}: IProgress){
    const remaining = remainingTime ? 100 * remainingTime / totalTime : 0;
    return (
        <div className="progress-bar">
            <div className="progress-inner" style={{width: `${remaining ?? 0}%`}}></div>
        </div>
    )
}