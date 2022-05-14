const imgEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;

const updateGallery = function () {
    imgEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};

prevEl.addEventListener("click", () => {
    x += 45;
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x -= 45;
    updateGallery();
});
