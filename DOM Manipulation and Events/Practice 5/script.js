const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");


const animation = square.animate(
    [{transform: "translateX(0px)"}, {transform: "translateX(200px)"}],
    {
        duration: 5000,
        direction: "alternate",
        easing: "ease-in-out"
    }
);

animation.pause();

playBtn.addEventListener("click", () => animation.play());
pauseBtn.addEventListener("click", () => animation.pause());