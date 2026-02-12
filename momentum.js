const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");
const canvasRect = canvas.getBoundingClientRect();

canvas.addEventListener("click", (e) => {
    console.log(e.x - canvasRect.left, e.y - canvasRect.top);
});