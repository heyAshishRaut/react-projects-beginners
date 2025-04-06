import { useState } from "react";

export function Fun09() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    function addHandler() {
        if (input.trim() !== "") {
            setItems([...items, input]); 
            setInput("");
        }
    }

    function removeHandler(index) {
        setItems(items.filter((_, i) => i !== index)); 
    }

    return (
        <div className="bg-black font-mono h-[100vh] w-[100vw] flex justify-center items-start">
            <div className="text-white mt-12 py-12 px-16 rounded-xl border-2">
                <div className="text-center mb-12 font-semibold text-3xl">Shopping List</div>

                <div className="flex gap-x-3 justify-center">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="Add items" className="text-black outline-none py-2 px-6 rounded-xl"/>
                    <button className="py-2 px-8 bg-blue-500 hover:bg-blue-600 rounded-xl"onClick={addHandler}>Add</button>
                </div>

                {items.length > 0 && (
                    <div className="p-4 bg-gray-400 rounded-xl mt-6 flex flex-col gap-y-3">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-x-3">
                                <div className="py-2 w-[200px] text-center text-black bg-white rounded-xl">{item}</div>
                                <button className="bg-red-400 rounded-xl py-2 px-6"onClick={() => removeHandler(index)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}