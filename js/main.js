
let game = new Game();

//cretae a board DOM

$(document).ready(initDynmaicApp);

function initDynmaicApp() {
    let conatainer = $('.container');
    for (let i = 0; i < ROW; i++) {
        let row = $(`<div class ="row"></div>`)
        for (let j = 0; j < COLUMN; j++) {
            let col = $(`<div class="col-3 card-border"></div>`)
            $(row).append(col);
            $(conatainer).append(row);
        }
    }
}


