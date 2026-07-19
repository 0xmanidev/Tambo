import {createBoard} from "./helper/board.js";
import{setupControls} from "./helper/controls.js";
import { resetGame } from "./helper/game.js";
import { setupTheme } from "./helper/theme.js";

resetGame();
createBoard();
setupControls();
setupTheme();