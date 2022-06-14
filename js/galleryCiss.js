const gallery = document.getElementById("gallery");
const popup = document.getElementById("pop-up");
const selectedImage = document.getElementById("selected-image");
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement("img");
  image.src = `../img/ciss/portfolio-${i}.jpg`;
  image.alt = `Portifolio image ${1} of Ipemo page`;
  image.classList.add("gallery-img");

  image.addEventListener("click", () => {
    //popup stuff
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `../img/ciss/portfolio-${i}.jpg`;
    selectedImage.alt = `Portifolio image ${1} of Ipemo page`;
  });
  gallery.appendChild(image);
});

popup.addEventListener("click", () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = "";
  popup.alt = "";
});
