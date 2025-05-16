let n = 10;
const array = [];

init();

function init() {
    const input = document.getElementById("num");
    if (input) {
        const val = parseInt(input.value);
        if (!isNaN(val) && val >= 2 && val <= 100) {
            n = val; 
        }
    }

    array.length = 0;
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showBars();
}

function play() {
    const copy = [...array];
    const moves = bubbleSort(copy);
    animate(moves);
}

function animate(moves) {
    if (moves.length === 0) {
        showBars();
        return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;
    if (move.type === "swap") {
        [array[i], array[j]] = [array[j], array[i]];
    }
    showBars(move);
    setTimeout(() => animate(moves), 200);
}

function bubbleSort(array) {
    const moves = [];
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            moves.push({ indices: [i - 1, i], type: "comp" });
            if (array[i - 1] > array[i]) {
                moves.push({ indices: [i - 1, i], type: "swap" });
                [array[i - 1], array[i]] = [array[i], array[i - 1]];
                swapped = true;
            }
        }
    } while (swapped);
    return moves;
}

function showBars(move) {
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.className = "bar";
        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type === "swap" ? "red" : "blue";
        }
        container.appendChild(bar);
    }
}
