const changeBackground = document.body;
const color = document.querySelector(".color");

// selecting the links to change the page
const hexPage = document.getElementById("hex-page");


// selecting the main wrappers
const hexWrapper = document.getElementById("hex-wrapper");


// selecting the buttons to change the background
const hexColor = document.getElementById("hex-color");



// hex page
hexPage.addEventListener("click", function () {
    if (hexPage.style.textDecoration != "underline") {
    

          // changes the background color
    changeBackground.style.backgroundColor = hexColor.textContent;
}
});

// 

//* adding event listener and function to the color buttons
// hex button
// array of values for the background color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
// a random number value
let randomNumberValue;

hexColor.addEventListener("click", function () {
  // saves the new background color
  let hexColorValue = "#";
  // randomly picks a value in the array and adds it to the background color above
  for (let i = 0; i < 6; i++) {
    randomNumberValue = Math.floor(Math.random() * hex.length);
    hexColorValue += hex[randomNumberValue];
  }
  // changes the text inside the button
  color.textContent = hexColorValue;
  // changes the background color
  changeBackground.style.background = hexColorValue;
});


















// rgb page
// rgbPage.addEventListener("click", function () {
//     if (rgbPage.style.textDecoration != "underline") {
//       rgbWrapper.style.display = "block";
//       hexWrapper.style.display = "none";
//       hslWrapper.style.display = "none";
//       rgbPage.style.textDecoration = "underline";
//       hexPage.style.textDecoration = "none";
//       hslPage.style.textDecoration = "none";
  
      // changes the background color
//       changeBackground.style.backgroundColor = rgbColor.textContent;
//     }
//   });
  
  // hsl page
//   hslPage.addEventListener("click", function () {
//     if (hslPage.style.textDecoration != "underline") {
//       hslWrapper.style.display = "block";
//       rgbWrapper.style.display = "none";
//       hexWrapper.style.display = "none";
//       hslPage.style.textDecoration = "underline";
//       rgbPage.style.textDecoration = "none";
//       hexPage.style.textDecoration = "none";
  
      // changes the background color
//       changeBackground.style.backgroundColor = hslColor.textContent;
//     }
//   });

 




// rgb button
// rgbColor.addEventListener("click", function () {
    // randomly picks a number between 0 and 255
    // let a = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 255
    // let b = Math.floor(Math.random() * 256);
    // randomly picks a number between 0 and 255
    // let c = Math.floor(Math.random() * 256);
    // saves the new background color
    // const rgbColorValue = `rgb(${a}, ${b}, ${c})`;
    // changes the text inside the button
    // rgbColor.textContent = rgbColorValue;
    // changes the background color
    // changeBackground.style.background = rgbColorValue;
//   })

  // hsl button
// hslColor.addEventListener("click", function () {
  // randomly picks a number between 0 and 360
//   let a = Math.floor(Math.random() * 361);
  // randomly picks a number between 0 and 100
//   let b = Math.floor(Math.random() * 101);
  // randomly picks a number between 0 and 100
//   let c = Math.floor(Math.random() * 101);
  // saves the new background color
//   const hslColorValue = `hsl(${a}, ${b}%, ${c}%)`;
  // changes the text inside the button
//   hslColor.textContent = hslColorValue;
  // changes the background color
//   changeBackground.style.background = hslColorValue;
// });

  