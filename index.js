

let size = prompt("How many boxes across?");





    for (let i = 0; i < (size * size); i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.style.width = (500/size) - (2) + "px";
        document.getElementById("boxes-container").appendChild(box);
    }
