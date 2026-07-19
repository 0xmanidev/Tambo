export function addHistory(number) {
    const list = document.getElementById("historyList");

    const div = document.createElement("div");

    div.className = "historyItem";

    div.textContent = number;

    list.prepend(div);
}
export function clearHistory() {
    document.getElementById("historyList").innerHTML = "";
}
