import { useEffect, useState } from "react";
import image from "../assets/gaming.png";

export function Fun08() {
    const [play, setPlay] = useState(0);

    const [resMes, setResMes] = useState("");
    const [whoWon, setWhoWon] = useState("");

    const [userOption, setUserOption] = useState("");
    const [computerOption, setComputerOption] = useState(""); 

    const [userPoints, setUserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);

    let arr = ["Stone", "Paper", "Scissor"];

    function resultHandler(){
        setPlay((prev) => prev + 1);

        const random = Math.floor(Math.random() * 3);
        const compChoice = arr[random];
        setComputerOption(compChoice);  

        if (userOption === compChoice) {
            setResMes("Draw");
            setWhoWon("Draw");
        }
        else if ((userOption === "Stone" && compChoice === "Scissor") || (userOption === "Paper" && compChoice === "Stone") || (userOption === "Scissor" && compChoice === "Paper")) {
            setResMes("User won");
            setWhoWon("User");
        }
        else {
            setResMes("Computer won");
            setWhoWon("Computer");
        }
    }

    useEffect(() => {
        if (whoWon === "User") {
            setUserPoints((prev) => prev + 1);
        }
        else if (whoWon === "Computer") {
            setComputerPoints((prev) => prev + 1);
        }
    }, [play]);

    return (
        <div className="bg-black w-[100vw] h-[100vh] flex justify-center items-center">
            <div className="bg-[#5d6d7e] w-[450px] rounded-lg p-6 flex flex-col">
                <div className="text-center text-3xl font-semibold text-white mb-10">Stone, Paper & Scissor</div>
                <div className="font-semibold text-lg text-white mb-6">Select option</div>
                <div className="grid grid-rows-1 grid-cols-3 gap-2 ">
                    <button className="bg-gray-400 py-3 rounded-lg font-semibold text-white hover:bg-gray-600" onClick={() => setUserOption("Stone")}>Stone</button>
                    <button className="bg-gray-400 py-3 rounded-lg font-semibold text-white hover:bg-gray-600" onClick={() => setUserOption("Paper")}>Paper</button>
                    <button className="bg-gray-400 py-3 rounded-lg font-semibold text-white hover:bg-gray-600" onClick={() => setUserOption("Scissor")}>Scissor</button>
                </div>
                <button className="bg-[#1e5980] hover:bg-[#103147] text-white font-semibold rounded-lg mt-4 py-3" onClick={resultHandler}>Submit response</button>
                {userOption &&
                    <div className="text-gray-200 font-mono text-sm mt-1">User - {userOption}</div>
                }

                <div>
                    <div className="flex justify-center items-center gap-x-6">
                        <img className="h-[80px] w-[80px] mt-8" src={image} alt="" />
                        <div className="text-white font-mono text-center mt-2 text-lg font-semibold">Computer - {computerOption || "🤔"}</div>
                    </div>
                    {resMes &&
                        <div className="font-semibold text-lg text-white text-center bg-[#73c6b6] rounded-lg mt-6 py-3">{resMes}
                        </div>
                    }
                </div>
                
                <div className="flex justify-around mt-6">
                    <div>
                        <p className="mb-2 text-center font-semibold text-lg text-white">User</p>
                        <div className=" rounded-xl border-gray-600 bg-gray-100 h-[80px] w-[80px] flex items-center justify-center font-bold text-3xl">{userPoints}</div>
                    </div>
                    <div>
                        <p className="mb-2 text-center font-semibold text-lg text-white">Computer</p>
                        <div className=" rounded-xl border-gray-600 bg-gray-100 h-[80px] w-[80px] flex items-center justify-center font-bold text-3xl">{computerPoints}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
