
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
            let col = $(`<div class="col-3 card-border"></div>`);
            let divCard = $(`<div class="card-border"></div>`);
            let imgCard = $(`<img class="img-stlye"></img>`);
            $(imgCard).attr({ "src": `../src/img/cards/${cells[i][j]}`, "height": "200px", "width": "200px" });
            $(divCard).append(imgCard);
            $(col).append(divCard);
            $(row).append(col);
            $(conatainer).append(row);
        }
    }
}


