import { useState } from "react";

export function Fun04(){
    const [cal, setCal] = useState("");

    function Handler(prop){

        if(prop == "="){
            if(cal == ""){
                return;
            }

            cal.replaceAll("X", "*");
            const ans = eval(cal);
            return setCal(ans);
        }

        setCal((prev) => prev + prop);
    }

    return (
        <div className="w-[100vw] h-[100vh] bg-gray-400 flex justify-center items-center">
            <div className=" w-[250px] bg-black p-2 rounded-xl flex flex-col">
                <div className="mt-8 bg-gray-200 h-[50px] rounded-lg font-semibold text-3xl mb-1 flex items-center justify-end px-4">{cal}</div>
                <button className="py-1 px-4 text-white bg-red-400 self-end rounded-lg mb-1" onClick={() => setCal("")}>Clear</button>
                <div className="grid grid-cols-4 grid-rows-4 gap-1">
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("1")}>1</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("2")}>2</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("3")}>3</button>
                    <button className="bg-slate-600 font-bold text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("-")}>-</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("4")}>4</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("5")}>5</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("6")}>6</button>
                    <button className="bg-slate-600 font-bold text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("+")}>+</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("7")}>7</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("8")}>8</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("9")}>9</button>
                    <button className="bg-gray-200 font-bold text-black p-2 rounded-lg row-span-2 hover:bg-gray-400" onClick={() => Handler("=")}>=</button>
                    <button className="bg-slate-600 font-bold text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("*")}>X</button>
                    <button className="bg-slate-600 text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("0")}>0</button>
                    <button className="bg-slate-600 font-bold text-white p-2 rounded-lg hover:bg-slate-700" onClick={() => Handler("/")}>/</button>
                </div>
            </div>
        </div>
    );
}