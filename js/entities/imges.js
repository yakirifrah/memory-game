const URL_IMGES = 'C:\dev\Bootcamp\Assigment5\src\img\cards\\';
const IMG_NAME = ['cat - Copy.jpg', 'cat.jpg', 'dog - Copy.jpg', 'dog.jpg', 'dog_haircut - Copy.jpeg',
    'dog_haircut.jpeg', 'love - Copy.jpeg', 'love.jpeg', 'anteater.jpg', 'anteater-Copy.jpg',
    'bull.jpg', 'bull-Copy.jpg'];
class Imges {
    constructor() {
        this.arrayImg = this.createImgUrl(IMG_NAME, URL_IMGES);
    }
    createImgUrl(imgName, imgFileUrl) {
        let arrLocationImg = [];
        for (let index = 0; index < imgName.length; index++) {
            arrLocationImg.push(`${imgFileUrl}${imgName[index]}`)
        }
        return arrLocationImg;
    }
}


