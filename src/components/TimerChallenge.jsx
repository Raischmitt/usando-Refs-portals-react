import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    const handleStart = () => {
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    };

    const handleStop = () => {
        
    }
    return (
        <>
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>you lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                    <button onClick={handleStart}>
                        {timerStarted ? 'stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted && 'active'}>
                    {timerStarted ? 'Time is running...' :  'Timer inactive'}
                </p>

            </section>
        </>
    )
}