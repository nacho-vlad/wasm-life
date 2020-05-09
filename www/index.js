import { Universe, Cell} from "game-of-life";
import { memory } from "game-of-life/game_of_life_bg";

const CELL_SIZE = 10;
const DEAD_COLOR = "#FFFFFF";
const GRID_COLOR = "#CCCCCC";
const ALIVE_COLOR = "#000000";

const universe = Universe.new();
const width = universe.width();
const height = universe.height();

const canvas = document.getElementById("game-of-life-canvas");
const playPauseButton = document.getElementById("play-pause");
const speedSlider = document.getElementById("speed");
canvas.height = (CELL_SIZE+1)*height+1;
canvas.width = (CELL_SIZE+1)*width+1;

const ctx = canvas.getContext('2d');

const getIndex = (row, column) => {
    return row * width + column
};

let animationId = null;

const drawGrid = () => {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COLOR;

    for(let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i* (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height +1);
    }

    
    for(let i = 0; i <= height; i++) {
        ctx.moveTo(0, i * (CELL_SIZE + 1) + 1);
        ctx.lineTo( (CELL_SIZE + 1) * width +1, i * (CELL_SIZE + 1) + 1 );
    }

    ctx.stroke();
};


const drawCells = () => {
    const cellsPtr = universe.cells();

    const cells = new Uint8Array(memory.buffer, cellsPtr,width * height);

    ctx.beginPath();

    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            const idx = getIndex(row,col);

            ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

            ctx.fillRect(
                col * (CELL_SIZE + 1) + 1,
                row * (CELL_SIZE + 1) + 1,
                CELL_SIZE,
                CELL_SIZE
            )
        }
    }
    ctx.stroke();
};

let frameNr = 0;

const renderLoop = () => {
   
    frameNr = (frameNr + 1) % 11;
    if(11 - speedSlider.value == frameNr) {
        universe.tick();
        drawGrid();
        drawCells();
        frameNr = 0;
    }

    animationId = requestAnimationFrame(renderLoop);
};

const isPaused = () => {
    return animationId === null
};

const play = () => {
    playPauseButton.textContent = "⏸";
    renderLoop();
};

const pause = () => {
    playPauseButton.textContent = "▶";
    cancelAnimationFrame(animationId);
    animationId=null;
};

playPauseButton.addEventListener("click", event => {
    if (isPaused()) {
        play();
    } else {
        pause();
    }
});

canvas.addEventListener("click", event => {
    const boundingRect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / boundingRect.width;
    const scaleY = canvas.height / boundingRect.height;

    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
    const canvasTop = (event.clientY - boundingRect.top) * scaleY;

    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

    universe.toggle_cell(row, col);

    drawGrid();
    drawCells();
});

drawGrid();
drawCells();
play();
