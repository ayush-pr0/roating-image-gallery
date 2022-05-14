const imgEl = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
const slideShowEl = document.getElementById("slide-show");
let auto = false;
let x = 0;

const updateGallery = function () {
    imgEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
};

prevEl.addEventListener("click", () => {
    auto = false;
    if (myInterval) clearInterval(myInterval);
    x += 45;
    updateGallery();
});

nextEl.addEventListener("click", () => {
    auto = false;
    if (myInterval) clearInterval(myInterval);
    x -= 45;
    updateGallery();
});

let myInterval;
const slideShow = function () {
    myInterval = setInterval(() => {
        x -= 45;
        updateGallery();
    }, 5000);
};

slideShowEl.addEventListener("click", () => {
    auto = !auto;
    if (auto) slideShow();
    else clearInterval(myInterval);
});
