import { useState } from "react";

export function Fun01(){
    const [count, setCount] = useState(0);

    function minus(){
        if(count == 0){
            return;
        }
        setCount(count - 1);
    }

    function plus() {
        setCount(count + 1);
    }

    function reset(){
        setCount(0);
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-black flex justify-center items-center">
            <div className="bg-gray-200 p-5 rounded-xl">
                <button className="bg-red-500 py-2 px-8 rounded-xl text-white font-medium" onClick={reset}>Reset</button>
                <div className="h-[300px] w-[300px] bg-yellow-300 rounded-xl flex justify-center items-center font-semibold text-5xl my-5 text-gray-100">{count}</div>
                <div className="flex justify-center gap-x-4">
                    <button className="bg-blue-600 rounded-xl text-gray-100 flex justify-center items-center py-2 px-8" onClick={plus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                    <button className="bg-blue-600 rounded-xl text-gray-100 flex justify-center items-center py-2 px-8" onClick={minus}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    );
}