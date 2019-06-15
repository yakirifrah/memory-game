
let game = new Game();
let cells = game.bord.cells;
let objLocal = JSON.parse(localStorage.getItem("globalStorage"));
let lenObjLocal = objLocal.length - 1;
//cretae a board DOM
$(document).ready(initDynmaicApp);
//stopWatch clock
let h1 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;
function initDynmaicApp() {
    victoryMessage();
    let conatainer = $('.container');
    for (let i = 0; i < ROW; i++) {
        let row = $(`<div class ="row flex-nowrap"></div>`);
        for (let j = 0; j < COLUMN; j++) {
            let col = $(`<div class="col-md-3 col-sm-3"></div>`);
            let divCard = $(`<div class="card mt-4 card-rotating"></div>`);
            let imgCard = $(`<img class="img-responsive"/>`);
            let divFront = $(`<div class="front"></div>`);
            let divBack = $(`<div class="back"></div>`)
            divFront.append(imgCard);
            let imgBack = $(`<img class="img-responsive" src="../src/img/cards/back.png" />`);
            $(divCard).attr({ "data-img": `${cells[i][j].substr(0, cells[i][j].indexOf(' '))}` });
            $(imgCard).attr({ "src": `../src/img/cards/${cells[i][j]}` });
            divBack.append(imgBack);
            $(divCard).append(divFront);
            $(divCard).append(divBack);
            $(col).append(divCard);
            $(row).append(col);
            $(conatainer).append(row);
        }
    }
    timer();
    $(".card").click((e) => {
        let card = e.currentTarget;
        let backFlipped = card.children[0];
        $(backFlipped).addClass('flipped');
        game.cardClicked(card);
        victoryMessage();

    })
}
$(".new-game").click(function (e) {
    let newGame = new Game();
    game = newGame;
    cells = game.bord.cells;
    let conatainer = $('.container');
    let lenChildren = conatainer[0].children.length;
    let containerChildren = conatainer[0].children;
    for (let i = 2; i < lenChildren; i++) {
        console.log(containerChildren[i]);
        $(containerChildren[i]).empty();
    }
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
    initDynmaicApp();
});

function victoryMessage() {
    if (game.victory === false) {
        document.querySelector('.sccore').innerHTML = `SCORE: ${game.numOfGuesses}`;
    }
    else {
        clearTimeout(t);
        // console.log("victory");
        let conatainer = $('.container');
        let lenChildren = conatainer[0].children.length;
        let containerChildren = conatainer[0].children;
        for (let i = 2; i < lenChildren; i++) {
            console.log(containerChildren[i]);
            $(containerChildren[i]).empty();
        }
        let strTime = h1.textContent;
        let messageVictory = $('<div class="animated bounce won text-center"></div>');
        $(conatainer).append(messageVictory);
        document.querySelector('.won').innerHTML = `${objLocal[lenObjLocal].user} your time ${strTime}`;

    }
}
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}


