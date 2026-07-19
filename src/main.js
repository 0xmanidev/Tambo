import { createBoard } from "./helper/board.js";
import { setupControls } from "./helper/controls.js";
import { resetGame } from "./helper/game.js";
import { setupTheme } from "./helper/theme.js";
import { setupShortcuts } from "./helper/shortcuts.js";

resetGame();
createBoard();
setupControls();
setupTheme();
setupShortcuts();
