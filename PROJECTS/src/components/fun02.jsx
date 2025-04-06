import { useEffect } from "react";
import { useState } from "react";

export function Fun02(){
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(false);
    
    useEffect(() => {
        if(!check){
            return;
        }
        const interval = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [check]);

    function Handler(){
        setCheck(false);
        setCount(0);
    }

    return(
        <div className="h-[100vh] w-[100vw] bg-black flex justify-center items-center">
            <div className="p-8 bg-white rounded-3xl">
                <button className="bg-red-500 mb-10 text-white py-1 px-6 rounded-xl hover:bg-red-600" onClick={Handler}>Reset</button>
                <div className="h-[250px] w-[250px] rounded-full bg-yellow-200 border-4 mb-10 flex justify-center items-center text-white font-bold text-6xl ">{count}</div>
                <div className="flex gap-x-6 justify-center text-white">
                    <button className="bg-blue-500 py-1 px-6 rounded-xl hover:bg-blue-600" onClick={() => setCheck(true)}>Start</button>
                    <button className="bg-blue-500 py-1 px-6 rounded-xl hover:bg-blue-600" onClick={() => setCheck(false)}>Stop</button>
                </div>
            </div>
        </div>
    );
}