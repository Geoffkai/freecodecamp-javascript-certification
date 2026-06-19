const pads = document.querySelectorAll(".drum-pad");

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    audio.currentTime = 0; // resets to start so rapid clicks work
    audio.play();
    document.getElementById("display").innerText = pad.dataset.name;
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const pad = audio.parentElement;
    document.getElementById("display").innerText = pad.dataset.name;
  }
});
