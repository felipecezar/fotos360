const pan = document.querySelector('.pan')

const img = './img360/01.jpg'


const panorama = new PANOLENS.ImagePanorama(img);
const viewer = new PANOLENS.Viewer({
    container: pan
});
viewer.add(panorama);