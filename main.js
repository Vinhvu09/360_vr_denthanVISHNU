const data = Array(43)
  .fill(0)
  .map((x, idx) => {
    return `images/khu den tho- Setup 0${
      idx + 1 > 9 ? idx + 1 : `0${idx + 1}`
    }.jpg`;
  });

let index = 0;
const imageContainer = document.querySelector(".image-container");
const btnNext = document.querySelector(".triangle-top");
const btnPrev = document.querySelector(".triangle-bottom");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
  controlBar: false,
});
let timer;

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
  const panoramaImage = new PANOLENS.ImagePanorama(data[index]);
  timer = setTimeout(() => {
    viewer.dispose();
    viewer.add(panoramaImage);
  }, 100);
}
