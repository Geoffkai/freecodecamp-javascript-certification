const favoriteBtn = document.querySelectorAll(".favorite-icon");

favoriteBtn.forEach(button => {
    button.addEventListener("click", () => addOrRemoveClass(button));
})

function addOrRemoveClass(button){
    if(button.classList.contains("filled")){
        button.classList.remove("filled");
        button.innerHTML = "&#9825";
    }else{
        button.classList.add("filled");
        button.innerHTML = "&#10084";
    }
}

