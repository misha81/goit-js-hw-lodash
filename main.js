const input = document.querySelector(".slider__input");

const image = document.querySelector(".slider__image")

input.addEventListener("input", _.debounce((changer), 200))

function changer() {
    image.style.width = `${input.value * 5}px`;
    image.style.height = `${input.value * 5}px`;
}

//=======================2=======================


const cont = document.querySelector("#box-cont");
const box = document.querySelector("#box")

cont.addEventListener('mousemove', _.debounce((event) => {
    box.style.top = `${event.offsetY}px`
    box.style.left = `${event.offsetX}px`
}, 100));