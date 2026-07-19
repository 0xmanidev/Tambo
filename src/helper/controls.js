import {drawNumber,resetGame}from "./game.js";
import {markNumber ,clearBoard}from "./board.js"
import {addHistory ,clearHistory} from "./history.js";
import { updateCurrent,resetCurrent } from "./current.js";

export function setupControls(){
    document.getElementById("drawBtn").onclick = () =>{
        const number = drawNumber();

        if(number == null){
            alert("All numbers have been drawn!");
            return;
        }
        updateCurrent(number);
        markNumber(number);
        addHistory(number);

    };
    document.getElementById("resetBtn").onclick=()=>{
        resetGame();
        clearBoard();
        clearHistory();
        resetCurrent();
    };
}