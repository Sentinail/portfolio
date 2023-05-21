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

            if (entry.target.classList.contains("boxes")) {
                entry.target.classList.add("box-slide")
            }
            
            observer.unobserve(entry.target);
        }
    })
}, {threshold: 0.3});

let hidden = document.querySelectorAll(".hidden");
let leftRight = document.querySelectorAll(".left-right");
let rightLeft = document.querySelectorAll(".right-left");
let bottomTop = document.querySelectorAll(".bottom-top");
hidden.forEach((el) => observer.observe(el));
leftRight.forEach((el) => observer.observe(el));
rightLeft.forEach((el) => observer.observe(el));
bottomTop.forEach((el) => observer.observe(el));

// Introduction Animation
let introductionContainer = document.querySelector(".non-bs-introduction");
let boxes = [];
for (let i = 0; i < 20; i++) {
    let randomHeight = Math.floor(Math.random() * introductionContainer.clientHeight);
    let randomDelay = (Math.random() * 2);
    let box = document.createElement("div");
    box.style.top = randomHeight + "px";
    box.style.transitionDelay = randomDelay + "s";
    box.classList.add("boxes");
    introductionContainer.append(box);
    boxes.push(box);
}

boxes.forEach((el) => observer.observe(el));
