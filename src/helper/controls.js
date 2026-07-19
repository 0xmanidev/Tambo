import {drawNumber,resetGame}from "./game.js";
import {markNumber ,clearBoard}from "./board.js"
import {addHistory ,clearHistory} from "./history.js";
import { updateCurrent,resetCurrent } from "./current.js";
import { updateProgress } from "./progress.js";

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
        updateProgress(number ===null?90:document.querySelectorAll(".historyItem").length);

    };
    document.getElementById("resetBtn").onclick=()=>{
        resetGame();
        clearBoard();
        clearHistory();
        resetCurrent();
        updateProgress(0);
    };
    const fullscreenBtn = document.getElementById("fullscreenBtn");

    fullscreenBtn.onclick =async()=>{
        if(!document.fullscreenElement){
            await document.documentElement.requestFullscreen();
        }else{
            await document.exitFullscreen();
        }
    }
}