const rect = document.getElementById("rect");
let position = 0;

function update(){
    rect.style.left = position + "px";
    position += 2;

    if(position > window.innerWidth){
        position = -rect.offsetWidth;
    }
}

function animate(){
    update();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);