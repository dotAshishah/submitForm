let btn = document.getElementById("btn");


function handleClick() {
  console.log("Button is Clicked.");
  btn.style.background = "white";
  btn.style.color = "black";
  btn.innerHTML = "Submitted";
  btn.removeEventListener("mouseout", mouseOut);
  btn.removeEventListener("mouseover", mouseOver);
}
function mouseOver() {
  btn.style.background = "green";
  btn.style.color = "black";
}

function mouseOut() {
  btn.style.background = "blue";
  btn.style.color = "white";
}


btn.addEventListener("mouseover", mouseOver);
btn.addEventListener("click", handleClick);
btn.addEventListener("mouseout", mouseOut);
