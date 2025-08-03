import { useRef, useState, useEffect } from "react";
import TimerControls from "./TimerControls";
import TimerDisplay from "./TimerDisplay";

function Timer() {
    const timerRef = useRef(null);
    const [time, setTime] = useState(() => {
        return Number(localStorage.getItem("time") || 0);
    });
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        localStorage.setItem("time", time);
    }, [time]);

    const toggleTimer = () => {
        if (isRunning) {
            // Clear interval to stop the timer
            clearInterval(timerRef.current);
            timerRef.current = null;
        } else {
            // Start timer
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        setIsRunning(false);
        setTime(0);
        timerRef.current = null;
        localStorage.removeItem('time')
    };

    return (
        <div className="mx-auto mt-10 max-w-md rounded-lg bg-gray-100 p-6 text-center shadow-lg">
            <TimerDisplay time={time} />
            <TimerControls
                toggleTimer={toggleTimer}
                resetTimer={resetTimer}
                isRunning={isRunning}
            />
        </div>
    );
}

export default Timer;
