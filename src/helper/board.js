export function createBoard(){
    const board = document.getElementById("board");

    board.innerHTML = "";
    
    for(let i = 1;i <= 90; i++){
        const div = document.createElement("div");

        div.className = "cell";

        div.id = "cell-" + i;

        div.textContent = i;

        board.appendChild(div);
    }
}

export function markNumber(number){
    document
    .getElementById("cell-" + number)
    .classList.add("drawn");
}
export function clearBoard(){
    document.querySelectorAll(".cell")
    .forEach(c => c.classList.remove("drawn"));
}