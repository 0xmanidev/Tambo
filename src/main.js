import { createBoard } from "./helper/board.js";
import { setupControls } from "src/helper/controls.js";
import { resetGame } from "./helper/game.js";
import { setupTheme } from "src/helper/theme.js";
import { setupShortcuts } from "./helper/shortcuts.js";

resetGame();
createBoard();
setupControls();
setupTheme();
setupShortcuts();
