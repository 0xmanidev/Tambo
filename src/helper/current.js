const display = document.getElementById("currentNumber");
export function updateCurrent(number){
    display.textContent = number;
    display.classList.add("animate");
    setTimeout(()=>{
        display.classList.remove("animate");
    },300);
}
export function resetCurrent(){
    display.textContent = "--";
}