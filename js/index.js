myID = document.getElementById("slide2");

let myScrollFunc = () => {
  var y = window.scrollY;
  if (y >= 800) {
    myID.className = "textbox2 show"
  } else {
    myID.className = "textbox2 hide"
  }
};

window.addEventListener("scroll", myScrollFunc);