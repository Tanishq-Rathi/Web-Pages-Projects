const modal = document.querySelector('.modal');
const overlay= document.querySelector('.overlay');

const openModule= function () {
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}
const closeModule = ()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}