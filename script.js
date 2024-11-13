const submitbtn = document.getElementById('submit-btn');
const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thankyou-component");
const ratingBtns = document.querySelectorAll(".rating-btn");
let ratingScore = document.querySelector(".dynamic-number");
console.log(ratingScore);

let defaultScore = 0;
submitbtn.addEventListener("click", submitScore);

function submitScore(e) {
    // e.preventDefault();

    ratingComponent.style.display = "none";
    thankYouComponent.style.display = "block";
    ratingScore.textContent = defaultScore;

}

function ratingBtnClicked(e) {
    if (e.target.classList.contains("rating-btn")) {
        e.target.classList.toggle("active");
    }
    defaultScore = e.target.textContent
}
ratingBtns.forEach(btn(btn) => {
    btn.addEventListener("click", ratingBtnClicked)
});



// console.log(submitbtn);
// console.log(ratingComponent);
// console.log(thankYouComponent);
// console.log(ratingBtns);