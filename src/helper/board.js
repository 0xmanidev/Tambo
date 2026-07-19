export function createBoard() {
    const board = document.getElementById("board");

    board.innerHTML = "";

    for (let i = 1; i <= 90; i++) {
        const div = document.createElement("div");

        div.className = "cell";

        div.id = "cell-" + i;

        div.textContent = i;

        board.appendChild(div);
    }
}

export function markNumber(number) {
    document.querySelectorAll(".latest").forEach((cell) => {
        cell.classList.remove("latest");
        cell.classList.add("drawn");
    });
    document.getElementById("cell-" + number).classList.add("latest");
}
export function clearBoard() {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.classList.remove("drawn", "latest");
    });
}
