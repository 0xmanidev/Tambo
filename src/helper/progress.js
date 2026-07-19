export function updateProgress(count){
    const percent = (count / 90)*100;

    document.getElementById("progressFill").style.width = `${percent}%`;
    
    document.getElementById("progressText").textContent = `${count} / 90 Drawn`;
}