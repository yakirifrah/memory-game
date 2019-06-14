const IMG_NAME = ['cat - Copy.jpg', 'cat.jpg', 'dog - Copy.jpg', 'dog.jpg', 'dog_haircut - Copy.jpeg',
    'dog_haircut.jpeg', 'love - Copy.jpeg', 'love.jpeg', 'anteater.jpg', 'anteater-Copy.jpg',
    'bull.jpg', 'bull-Copy.jpg'];

class Cards {
    constructor() {
        this.cardMix = this.CardShuffling(IMG_NAME);
    }
    CardShuffling(cards) {
        var arrClone = cards.slice(0);
        // Shuffle the array
        return arrClone.sort(function () {
            return Math.random() - 0.5
        })
    }
}
