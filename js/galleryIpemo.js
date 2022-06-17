const gallery = document.getElementById("gallery");
const popup = document.getElementById("pop-up");
const selectedImage = document.getElementById("selected-image");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  // image.src = `../img/ipemo/portfolio-${i}.jpg`;
  image.src = `https://ik.imagekit.io/gildoch/ipemo/tr:w-600/portfolio-${i}.jpg`;
  image.alt = `Portifolio image ${1} of Ipemo page`;
  image.classList.add("gallery-img");

  image.addEventListener("click", () => {
    //popup stuff
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `https://ik.imagekit.io/gildoch/ipemo/portfolio-${i}.jpg`;
    selectedImage.srcset = `https://ik.imagekit.io/gildoch/ipemo/tr:w-400/portfolio-${i}.jpg 400w,
    https://ik.imagekit.io/gildoch/ipemo/tr:w-800/portfolio-${i}.jpg 800w,
    https://ik.imagekit.io/gildoch/ipemo/tr:w-1200/portfolio-${i}.jpg 1200w`;
    selectedImage.alt = `Portifolio image ${1} of Ipemo page`;
  });
  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
