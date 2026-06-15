const inputEl = document.getElementById("myInput");

inputEl.addEventListener("input", (e) => {
    console.log("input event fired:", e.target.value);
});

inputEl.addEventListener("change", (e) => {
    console.log("change event fired:", e.target.value);
})