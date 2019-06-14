
let game = new Game();
let cells = game.bord.cells;

//cretae a board DOM
console.log(cells);
$(document).ready(initDynmaicApp);

function initDynmaicApp() {
    let conatainer = $('.container');
    for (let i = 0; i < ROW; i++) {
        let row = $(`<div class ="row"></div>`);
        for (let j = 0; j < COLUMN; j++) {
            let col = $(`<div class="col-3"></div>`);
            let divCard = $(`<div class="card"></div>`);
            let imgCard = $(`<img class="img-stlye"/>`);
            let imgBack = $(`<img class="back" src="../src/img/cards/back.png" />`);
            $(divCard).attr({ "data-img": `${cells[i][j].substr(0, cells[i][j].indexOf(' '))}` });
            $(imgCard).attr({ "src": `../src/img/cards/${cells[i][j]}`, "height": "200px", "width": "200px" });
            $(divCard).append(imgCard);
            $(divCard).append(imgBack);
            $(col).append(divCard);
            $(row).append(col);
            $(conatainer).append(row);
        }
    }
    $(".card").click((e) => {
        let card = e.currentTarget;
        game.cardClicked(card);

    })
}


