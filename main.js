let result = document.querySelector(".result");
let newColorbtn = document.querySelector(".dynamic div");
let rgbColor = document.querySelector("span");
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);
rgbColor.textContent = `rgb(${red}, ${green}, ${blue})`;

//creating an empty array to later store row1 circles and row2 circles
let coloredCircles = [];

let row1 = document.querySelector(".row1").children;
for (let i = 0; i < row1.length; i++) {
    coloredCircles.push(row1[i]);
    row1[i].style.cursor = "grab";
}
let row2 = document.querySelector(".row2").children;
for (let i = 0; i < row2.length; i++) {
    coloredCircles.push(row2[i]);
    row2[i].style.cursor = "grab";
}
//looping through the coloured circles and setting random background color to them
for (let i = 0; i < coloredCircles.length; i++) {
    coloredCircles[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ,${Math.floor(Math.random() * 255)} ,${Math.floor(Math.random() * 255)})`;
}

//accessing random circle from the colored circles
let randomCircle = coloredCircles[Math.floor(Math.random() * 6)];
//setting random circle's background color to the rgb color
randomCircle.style.backgroundColor = rgbColor.textContent;


coloredCircles.forEach(e=>{
        e.addEventListener("click", () => {
        console.log(e)
    if (e.style.backgroundColor === rgbColor.textContent) {
        for(let i=0; i<coloredCircles.length; i++){
            coloredCircles[i].style.backgroundColor = rgbColor.textContent;
        }
       result.style.visibility = "visible";
       result.textContent = "Correct guess😍";
       result.style.color = "rgb(91, 179, 29)";
       result.style.fontWeight = "900";
       result.style.fontSize = "30px";
    }
    else{
        result.style.visibility = "visible";
        result.textContent = "Wrong guess😬Please try again!";
        result.style.color = "red"; 
        result.style.fontWeight = "900";
        result.style.fontSize = "15px";
    }

})
})


function newColor() {
    newColorbtn.style.backgroundColor = "#ff8c00";
    newColorbtn.style.color = "#fff";
    setTimeout(() => {
        // Reload the page
        location.reload();
    }, 10); 
}
