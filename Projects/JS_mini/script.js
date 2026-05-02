let count = 0;

const countValue = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Increase
increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

// Decrease
decreaseBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

// Reset
resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

function updateCounter() {
    countValue.textContent = count;

    if (count > 0) {
        countValue.style.color = "green";
    } else if (count < 0) {
        countValue.style.color = "red";
    } else {
        countValue.style.color = "black";
    }
}