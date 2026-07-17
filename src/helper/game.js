export const game ={
    available: [],
    history: [],
    current: null
};

export function resetGame(){
    game.available = Array.from({ length:90 }, (_, i) => i+1);
    game.history = [];
    game.current = null;
}

export function drawNumber(){
    if(game.available.length === 0) return null;

    const index = Math.floor(Math.random() * game.available.length);

    const number = game.available.splice(index,1)[0];

    game.current = number;
    game.history.push(number);

    return number;
}