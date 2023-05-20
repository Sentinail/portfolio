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

// Intersection Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("hidden")) {
                entry.target.classList.add("show");
            }

            if (entry.target.classList.contains("bottom-top") || entry.target.classList.contains("left-right") || entry.target.classList.contains("right-left")) {
                entry.target.classList.add("slide");
            }
        }

        else {
            entry.target.classList.remove("show")
            entry.target.classList.remove("slide");
        }
    })
})

let hidden = document.querySelectorAll(".hidden");
let leftRight = document.querySelectorAll(".left-right");
let rightLeft = document.querySelectorAll(".right-left");
let bottomTop = document.querySelectorAll(".bottom-top");
hidden.forEach((el) => observer.observe(el));
leftRight.forEach((el) => observer.observe(el));
rightLeft.forEach((el) => observer.observe(el));
bottomTop.forEach((el) => observer.observe(el));
