var rows_25DEV010 = 2;
var cols_25DEV010 = 2;
var maxTableSize_25DEV010 = 300;
var timer_25DEV010 = 30;
var correctClicks_25DEV010 = 0;
var wrongClicks_25DEV010 = 0;
var score_25DEV010 = 0;
var multiplier_25DEV010 = 1;
var lighterCell_25DEV010 = '';
var maxWrongClicks_25DEV010 = 6;
var timeInterval_25DEV010;
function initializeGame() {
    resetGameVariables();
    createTable(rows_25DEV010, cols_25DEV010);
}
// function to reset all the variables
function resetGameVariables() {
    var _a;
    rows_25DEV010 = 2;
    cols_25DEV010 = 2;
    timer_25DEV010 = 30;
    correctClicks_25DEV010 = 0;
    wrongClicks_25DEV010 = 0;
    score_25DEV010 = 0;
    multiplier_25DEV010 = 1;
    updateStats();
    clearInterval(timeInterval_25DEV010);
    // document.getElementById("timer").innerText = `Time: ${timer_25DEV010}s`;
    (_a = document.getElementById("timer")) === null || _a === void 0 ? void 0 : _a.remove();
}
// function to generate all random colours
function generateRandomColor() {
    var letters_25DEV010 = "0123456789ABCDEF";
    var color_25DEV010 = "#";
    for (var i = 0; i < 6; i++) {
        color_25DEV010 += letters_25DEV010[Math.floor(Math.random() * 16)];
    }
    return color_25DEV010;
}
// function to create table dynamic
function createTable(rows_25DEV010, cols_25DEV010) {
    var gameContainer_25DEV010 = document.getElementById("game-container");
    gameContainer_25DEV010.innerHTML = "";
    var table_25DEV010 = document.createElement("table");
    var cellWidth_25DEV010 = maxTableSize_25DEV010 / cols_25DEV010;
    var cellHeight_25DEV010 = maxTableSize_25DEV010 / rows_25DEV010;
    var randomRow_25DEV010 = Math.floor(Math.random() * rows_25DEV010);
    var randomCol_25DEV010 = Math.floor(Math.random() * cols_25DEV010);
    lighterCell_25DEV010 = "".concat(randomRow_25DEV010, "-").concat(randomCol_25DEV010);
    var tableColor_25DEV010 = generateRandomColor();
    for (var row_25DEV010 = 0; row_25DEV010 < rows_25DEV010; row_25DEV010++) {
        var tableRow_25DEV010 = document.createElement("tr");
        for (var col_25DEV010 = 0; col_25DEV010 < cols_25DEV010; col_25DEV010++) {
            var cell_25DEV010 = document.createElement("td");
            cell_25DEV010.id = "".concat(row_25DEV010, "-").concat(col_25DEV010);
            cell_25DEV010.style.width = "".concat(cellWidth_25DEV010, "px");
            cell_25DEV010.style.height = "".concat(cellHeight_25DEV010, "px");
            cell_25DEV010.style.backgroundColor = tableColor_25DEV010;
            cell_25DEV010.addEventListener("click", function () {
                handleCellClicks(this);
            });
            if (cell_25DEV010.id === lighterCell_25DEV010) {
                cell_25DEV010.classList.add("lighter");
            }
            tableRow_25DEV010.appendChild(cell_25DEV010);
        }
        table_25DEV010.appendChild(tableRow_25DEV010);
    }
    gameContainer_25DEV010.appendChild(table_25DEV010);
}
// function to to handle the random cell events
function handleCellClicks(cell_25DEV010) {
    if (timer_25DEV010 >= 0) {
        if (cell_25DEV010.id === lighterCell_25DEV010) {
            correctClicks_25DEV010++;
            multiplier_25DEV010++;
            score_25DEV010 += 10 * multiplier_25DEV010;
            rows_25DEV010++;
            cols_25DEV010++;
            flashCell(cell_25DEV010, "correct");
            updateStats();
            createTable(rows_25DEV010, cols_25DEV010);
        }
        else {
            wrongClicks_25DEV010++;
            multiplier_25DEV010 = 1;
            flashCell(cell_25DEV010, "wrong");
            updateStats();
            if (wrongClicks_25DEV010 >= maxWrongClicks_25DEV010) {
                endGame();
            }
        }
    }
    if (timer_25DEV010 === 30) {
        startTimer();
    }
}
// Checks for right and wrong Cell check
function flashCell(cell_25DEV010, type) {
    cell_25DEV010.classList.add(type);
    setTimeout(function () { return cell_25DEV010.classList.remove(type); }, 300);
}
// function to show final score and details
function updateStats() {
    document.getElementById("current-score").innerText = score_25DEV010.toString();
    document.getElementById("correct-clicks").innerText = correctClicks_25DEV010.toString();
    document.getElementById("wrong-clicks").innerText = wrongClicks_25DEV010.toString();
}
// function to set the timer
function startTimer() {
    var timerElement_25DEV010 = document.getElementById("timer");
    timeInterval_25DEV010 = setInterval(function () {
        timer_25DEV010--;
        timerElement_25DEV010.innerText = "Time: ".concat(timer_25DEV010, "s");
        if (timer_25DEV010 <= 0) {
            clearInterval(timeInterval_25DEV010);
            endGame();
        }
    }, 1000);
}
// function to end the game
function endGame() {
    clearInterval(timeInterval_25DEV010);
    alert("Game Over\nCorrect Clicks: ".concat(correctClicks_25DEV010, "\nWrong Clicks: ").concat(wrongClicks_25DEV010));
    document.getElementById("game-container").innerHTML = "<h2>Game Over</h2>";
}
// function to restart the game
function restartGame() {
    initializeGame();
}
// function to Start the game
initializeGame();
