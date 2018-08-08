const imgage = document.getElementById('pic');
let namberOfPicture = 0;
let pictureGallery = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg"
];

function next() {
    namberOfPicture++;
    if (namberOfPicture === 5) {
        namberOfPicture = 0;
    }
    imgage.src = pictureGallery[namberOfPicture];
}

function prev() {
    namberOfPicture--;
    if (namberOfPicture === -1) {
        namberOfPicture = 4;
    }
    imgage.src = pictureGallery[namberOfPicture];
}

function play() {
    //while isn't working
}



