// Clicking Portfolio Imgs
let portfolioImgs = document.getElementsByClassName("portfolio-img");
let modal = document.querySelector(".non-bs-modal");
let modalImg = modal.children[1];
modalImg.style.position = "relative";
function closeModal() {
    modal.classList.toggle("active");
}
for (let i = 0; i < portfolioImgs.length; i++) {
    portfolioImgs.item(i).onclick = () => {
        modal.classList.toggle("active");
        modalImg.src = portfolioImgs.item(i).children[0].src
    }
}