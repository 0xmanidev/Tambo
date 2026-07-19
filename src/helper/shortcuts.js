export function setupShortcuts(){
    document.addEventListener("keydown",(e)=>{
        if(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)){
            return;
        }
        switch(e.key.toLowerCase()){
            case"d":
                e.preventDefault();
                document.getElementById("drawBtn").click();
                break;
            case "r":
                document.getElementById("resetBtn").click();
                break;
            case "f":
                document.getElementById("fullscreenBtn").click();
                break;
        }
    });
}