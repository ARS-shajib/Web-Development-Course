const images = [
    'images/photo-1.jpg',
    'images/photo-2.jpg',
    'images/photo-3.jpg',
    'images/photo-4.jpg',
    'images/photo-5.jpg',
];

let imgCounter = 0, count = 0;
const imgElement = document.getElementById('slider-img');
let refreshIntervalId = setInterval(() => {
    if (imgCounter >= 5) imgCounter = 0;
    const imgUrl = images[imgCounter];
    imgElement.setAttribute('src', imgUrl);
    imgCounter++; count++;
    //console.log(refreshIntervalId);
    // if (count > 10) clearInterval(refreshIntervalId); // to stop setInterval function.
}, 1000)

for (let i = 0; i < 10; i++) console.log('shajib', i);