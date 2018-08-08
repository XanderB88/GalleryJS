const imgage = document.getElementById('pic');
const pictureGallery = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];
let numberOfPicture = 0;

function next() {
    numberOfPicture++;
    if (numberOfPicture === 5) {
        numberOfPicture = 0;
    }
    imgage.src = pictureGallery[numberOfPicture];
}

function prev() {
    numberOfPicture--;
    if (numberOfPicture === -1) {
        numberOfPicture = 4;
    }
    imgage.src = pictureGallery[numberOfPicture];
}

function play() {
    //while isn't working
}



