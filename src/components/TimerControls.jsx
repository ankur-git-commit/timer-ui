import { useEffect, useRef } from "react";

function TimerControls({ toggleTimer, resetTimer, isRunning }) {
    const startButtonRef = useRef(null);
    
    useEffect(() => {
        if (startButtonRef.current){
            startButtonRef.current.focus()
        }
    }, []);

    return (
        <div>
            <button
                ref={startButtonRef}
                onClick={toggleTimer}
                className="mt-3 mr-3 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
                {isRunning ? "Pause" : "Start"}
            </button>
            <button
                onClick={resetTimer}
                className="mt-3 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
                Reset
            </button>
        </div>
    );
}

export default TimerControls;
