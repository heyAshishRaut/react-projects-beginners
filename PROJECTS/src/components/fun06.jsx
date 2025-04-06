import { useState } from "react";

export function Fun06() {
    const [mode, setMode] = useState(false);

    return (
        <div className={`${mode ? "bg-black" : "bg-custom-gradient"} h-[100vh] w-[100vw] flex justify-center items-center transition-all duration-500`}>
            <div className={`${mode ? "bg-gray-900 border-white" : "bg-white border-gray-500"} h-[600px] w-[350px] rounded-[45px] border-4 flex flex-col items-center justify-end transition-all duration-500`}>

                {/* Toggle Button */}
                <button className={`${mode ? "bg-white text-black" : "bg-black text-white"} mb-4 py-2 px-6 rounded-xl font-semibold transition-all duration-500`}onClick={() => setMode(!mode)}>Toggle</button>

                {/* Color Boxes */}
                <div className={`${mode ? "bg-white" : "bg-black"} grid grid-rows-1 grid-cols-4 gap-2 mb-3 p-2 rounded-[30px] transition-all duration-500`}>
                    <div className={`h-[70px] w-[70px] rounded-3xl ${mode ? "bg-gray-600" : "bg-gray-300"}`}></div>
                    <div className={`h-[70px] w-[70px] rounded-3xl ${mode ? "bg-yellow-600" : "bg-yellow-300"}`}></div>
                    <div className={`h-[70px] w-[70px] rounded-3xl ${mode ? "bg-blue-600" : "bg-blue-300"}`}></div>
                    <div className={`h-[70px] w-[70px] rounded-3xl ${mode ? "bg-red-600" : "bg-red-400"}`}></div>
                </div>
            </div>
        </div>
    );
}
