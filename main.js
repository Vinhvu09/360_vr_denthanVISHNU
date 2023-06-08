const data = Array(32)
  .fill(0)
  .map((x, idx) => {
    return `images/Den Than VISHNU- Setup 0${
      idx + 1 > 9 ? idx + 1 : `0${idx + 1}`
    }.jpg`;
  });

const imageContainer = document.querySelector(".image-container");
const btnNext = document.querySelector(".triangle-top");
const btnPrev = document.querySelector(".triangle-bottom");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});

let index = 0;
let timer;
const TIME_DEBOUNCE = 300;

load();

btnNext.addEventListener("click", function () {
  index = index >= data.length - 1 ? 0 : ++index;
  load();
});

btnPrev.addEventListener("click", function () {
  index = index === 0 ? 0 : --index;
  load();
});

function load() {
  if (index === 0) {
    btnPrev.classList.add("hide");
  } else {
    btnPrev.classList.remove("hide");
  }

  if (index === data.length - 1) {
    btnNext.classList.add("hide");
  } else {
    btnNext.classList.remove("hide");
  }

  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    const panoramaImage = new PANOLENS.ImagePanorama(data[index]);
    viewer.dispose();
    viewer.add(panoramaImage);
  }, TIME_DEBOUNCE);
}
