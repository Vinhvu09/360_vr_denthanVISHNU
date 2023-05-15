const data = Array(20).fill(0).map((x, idx) => {
  return `images/khu den tho- Setup 0${idx + 1 > 9 ? idx + 1 : `0${idx + 1}`}.jpg`;
});
console.log(data);

let index = 0;
const imageContainer = document.querySelector(".image-container");
const btnNext = document.querySelector(".long-arrow-right");
const btnPrev = document.querySelector(".long-arrow-left");


const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,

});
load();
btnPrev.classList.add("hide");
btnNext.addEventListener("click", function () {
  btnPrev.classList.remove("hide");
  if (index >= data.length - 1) {
    index = 0;
  }
  else {
    index++;
  }
  load();
});
btnPrev.addEventListener("click", function () {
  if (index === 0) {
    this.classList.add("hide");
    index = 0;
  } else {
    index--;
  }
  load();
});

function load() {
  const panoramaImage = new PANOLENS.ImagePanorama(data[index]);
  viewer.dispose();
  viewer.add(panoramaImage);
}




