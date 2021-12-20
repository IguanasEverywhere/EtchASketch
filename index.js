let size = 1;
renderBoxes(1);


let btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', () => {
    renderBoxes(2);
});
let btn4 = document.querySelector("#btn4");
btn4.addEventListener('click', () => {
    renderBoxes(4);
});
let btn8 = document.querySelector("#btn8");
btn8.addEventListener('click', () => {
    renderBoxes(8);
});
let btn16 = document.querySelector("#btn16");
btn16.addEventListener('click', () => {
    renderBoxes(16);
});
let btn32 = document.querySelector("#btn32");
btn32.addEventListener('click', () => {
    renderBoxes(32);
});
let btn64 = document.querySelector("#btn64");
btn64.addEventListener('click', () => {
    renderBoxes(64);
});

function renderBoxes(size) {

    // Remove the boxes already rendered so that it doesn't keep compounding more boxes each time user clicks size button
    // and starts fresh

    let existingBoxes = document.querySelectorAll(".box");
    existingBoxes.forEach(existingBox => {
        existingBox.remove();
    });

    // render boxes with appropriate size value


    for (let i = 0; i < (size * size); i++) {
        let box = document.createElement("div");
        box.className = "box";
        box.style.width = (500 / size) - (2) + "px"; // subtract size from width of overall container + 2px for border
        document.getElementById("boxes-container").appendChild(box);
    }

    let boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseover', evt => {
            evt.target.style.backgroundColor = "black";
        });
    });

    let clearBtn = document.querySelector("#clearBtn");

    clearBtn.addEventListener('click', handleClearClick);

    function handleClearClick() {
        boxes.forEach(box => {
            box.style.backgroundColor = "white";
        });
    }
}

