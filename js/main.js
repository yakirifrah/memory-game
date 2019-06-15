
let game = new Game();
let cells = game.bord.cells;
//cretae a board DOM
$(document).ready(initDynmaicApp);
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
    $(".card").click((e) => {
        victoryMessage();
        let card = e.currentTarget;
        let backFlipped = card.children[0];
        $(backFlipped).addClass('flipped');
        game.cardClicked(card);
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
    initDynmaicApp();
});



function victoryMessage() {
    if (game.victory === false) {
        document.querySelector('.sccore').innerHTML = `SCORE: ${game.flippedCouplesCount} \\ ${TOTAL_COUPLES_CARDS}`;
    }
    else {
        let conatainer = $('.container');
        let lenChildren = conatainer[0].children.length;
        let containerChildren = conatainer[0].children;
        for (let i = 2; i < lenChildren; i++) {
            console.log(containerChildren[i]);
            $(containerChildren[i]).empty();
        }

        let messageVictory = $(`<div class="animated bounce"> </div>`)

    }

}



