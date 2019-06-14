const ROW = 3;
const COLUMN = 4;
const TOTAL_COUPLES_CARDS = 6;

class Game {
    constructor() {
        this.bord = new Board(COLUMN);
        this.elPreviousCard = null;
        this.flippedCouplesCount = 0;
    }
    cardClicked(CurrentCard) {
        if (CurrentCard.classList.contains('flipped')) {
            return;
        }
        CurrentCard.classList.add('flipped');
        this.checkIfCardFirst(CurrentCard);
    }
    checkIfCardFirst(CurrentCard) {
        if (this.elPreviousCard === null) {
            console.log('first card');
            this.elPreviousCard = CurrentCard;
        }
        else {
            console.log('second card');
            let Firstcard = this.elPreviousCard.getAttribute('data-img');
            let Secondcard = CurrentCard.getAttribute('data-img');
            this.isMatchCards(Firstcard, Secondcard);
            this.elPreviousCard = null;
        }

    }
    isMatchCards(Firstcard, Secondcard) {
        if (Firstcard === Secondcard) {
            console.log('Right');
        }
        else {
            console.log('Wrong');
        }

    }


}

