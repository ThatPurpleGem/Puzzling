window.slide = 1;
window.nano_slide = 1;
window.Nano_X = 100;
  

console.log("Initial Slide:", window.slide);
console.log("Nano Slide:", nano_slide);
console.log("Starting Nano_X:", Nano_X);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function slideplus1() {
  window.slide += 1;
  console.log("slide:", window.slide);
  window.updateButtonClueVisibility?.();
}

function slideminus1() {
  window.slide -= 1;
  console.log("slide:", window.slide);
  window.updateButtonClueVisibility?.();
}




// nano ai
setInterval(() => {
  let ai = getRandomInt(1, 4);
  console.log("Random AI:", ai);

  if (ai === 1) {
    Nano_X -= 25;
  } else {
    Nano_X += 25;
  }
  window.Nano_X = Nano_X;

  let nanoEl = document.getElementById("Nano");
  nanoEl.style.right = Nano_X + "px";
  console.log("Nano_X is now:", nanoEl.style.right);

  if (Nano_X >= -50){
    nano_slide +=1
    console.log(nano_slide)
  }
}, 2000);





