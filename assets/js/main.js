function setBoxSize() {
    var sizeValue = document.getElementById("size").value;
    document.querySelector(".area").style.width = sizeValue + "px";
    document.querySelector(".area").style.height = sizeValue + "px";
  }
  
  document.getElementById("size").addEventListener("input", setBoxSize);
function setBallSize(){
    var sizeValue = document.getElementById("sizeofball").value;
    document.querySelector(".minnak").style.width = sizeValue +"px"
    document.querySelector(".minnak").style.height = sizeValue +"px";
}
document.getElementById("sizeofball").addEventListener("input", setBallSize)

function setColorOfBall() {
    var colorOfBallValue = document.getElementById("colorofball").value;
    document.querySelector(".minnak").style.backgroundColor = colorOfBallValue;
  }
  document.getElementById("colorofball").addEventListener("input", setColorOfBall);
  
  function setBackgroundColor() {
    var bgColorValue = document.getElementById("bgcolor").value;
    document.querySelector(".area").style.backgroundColor = bgColorValue;
  }
  document.getElementById("bgcolor").addEventListener("input", setBackgroundColor);


function moveLeft() {
    var minnak= document.querySelector(".minnak");
    var minnakWidth = parseInt(getComputedStyle(minnak).getPropertyValue("width"), 10);
    minnak.style.left = (minnak.offsetLeft - minnak.Width) + "px";
  }
  
  document.getElementById("sol").onclick = moveLeft;

  function moveRight() {
    var minnak = document.querySelector(".minnak");
    var minnakWidth = parseInt(getComputedStyle(minnak).getPropertyValue("width"), 10);
    minnak.style.left = (minnak.offsetLeft + minnakWidth) + "px";
  }
  document.getElementById("sag").onclick = moveRight;
  
  function moveUp() {
    var minnak1 = document.querySelector(".minnak");
    var minnak1Height = parseInt(getComputedStyle(minnak1).getPropertyValue("height"), 10);
    minnak1.style.top = (minnak1.offsetTop - minnnak1Height) + "px";
  }
  document.getElementById("ust").onclick = moveUp;
  
  function moveDown() {
    var minnak = document.querySelector(".minnak");
    var minnakHeight = parseInt(getComputedStyle(minnak).getPropertyValue("height"), 10);
    minnak.style.top = (minnak.offsetTop + minnakHeight) + "px";
  }
  document.getElementById("alt").onclick = moveDown;
  