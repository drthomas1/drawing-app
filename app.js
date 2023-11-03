var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
console.log(ctx);

// var heightRatio = 1.0;
// canvas.height = canvas.width * heightRatio;
// function resizeToFitWindow () {
//   canvas.width = canvas.clientWidth;
//   canvas.height = canvas.clientHeight;
//   ctx.fillStyle = backgroundColor;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// }
// window.addEventListener('resize', resizeToFitWindow);


let backgroundColor = 'white';
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);
let painting = false;
let brushSize = 10;
let brushType = 'round';
let colorVar = 'black';
let colorArr = ['black', 'brown', 'pink', 'purple', 'blue', 'green', 'yellow', 'orange', 'red', 'white'];
const pencils = document.querySelectorAll('.pencil-image');
const brushes = document.querySelectorAll('.circleBase');
const clearButton = document.querySelector('.refresh-image');
const circleBase = document.querySelector('.circleBase');
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
// const cat3 = document.getElementById('cat3');

brushes[0].style.border = '3px solid white';
pencils[0].style.border = '2px solid red';

cat1.onclick = () => {
  brushType = 'round';
  changeBrushShape('50%');
}
cat2.onclick = () => {
  brushType = 'square';
  changeBrushShape('0');
}
// cat3.onclick = () => {
//   brushTypeId.innerHTML = 'BUTT';
//   brushType = 'butt';
// }

function startPosition(e) {
  painting = true;
  draw(e);
}
function endPosition(e) {
  painting = false;
  ctx.beginPath();

}
function draw(e){
  if(!painting) return;
  ctx.lineWidth = brushSize;
  ctx.lineCap = brushType;
  ctx.strokeStyle = colorVar;
  var rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);

//BUTTONS

function clearCanvas(){
  ctx.fillStyle = backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
clearButton.onclick = () => {
  clearCanvas();
}

function changeBrushShape(percentage){
  for(let i = 0; i < brushes.length; i++){
      brushes[i].style.borderRadius = percentage;
  }
}

function removeWhiteBorder(currentBrush){
  for(let i = 0; i < brushes.length; i++){
    if(brushes[i] !== currentBrush){
      brushes[i].style.border = 'none';
    }
  }
}

brushes[0].onclick = () => {
  brushSize = 10;
  brushes[0].style.border = '3px solid white';
  removeWhiteBorder(brushes[0]);
}
brushes[1].onclick = () => {
  brushSize = 20;
  brushes[1].style.border = '3px solid white';
  removeWhiteBorder(brushes[1]);
}
brushes[2].onclick = () => {
  brushSize = 30;
  brushes[2].style.border = '3px solid white';
  removeWhiteBorder(brushes[2]);
}
brushes[3].onclick = () => {
  brushSize = 40;
  brushes[3].style.border = '3px solid white';
  removeWhiteBorder(brushes[3]);
}
brushes[4].onclick = () => {
  brushSize = 50;
  brushes[4].style.border = '3px solid white';
  removeWhiteBorder(brushes[4]);
}

function removeRedBorder(currentPencil){
  for(let i = 0; i < pencils.length; i++){
    if(pencils[i] !== currentPencil){
      pencils[i].style.border = 'none';
    }
  }
}

pencils[0].onclick = () => {
  pencils[0].style.border = '2px solid red';
  removeRedBorder(pencils[0]);
  colorVar = colorArr[0];
}
pencils[1].onclick = () => {
  pencils[1].style.border = '2px solid red';
  removeRedBorder(pencils[1]);
  colorVar = colorArr[1];
}
pencils[2].onclick = () => {
  pencils[2].style.border = '2px solid red';
  removeRedBorder(pencils[2]);
  colorVar = colorArr[2];
}
pencils[3].onclick = () => {
  pencils[3].style.border = '2px solid red';
  removeRedBorder(pencils[3]);
  colorVar = colorArr[3];
}
pencils[4].onclick = () => {
  pencils[4].style.border = '2px solid red';
  removeRedBorder(pencils[4]);
  colorVar = colorArr[4];
}
pencils[5].onclick = () => {
  pencils[5].style.border = '2px solid red';
  removeRedBorder(pencils[5]);
  colorVar = colorArr[5];
}
pencils[6].onclick = () => {
  pencils[6].style.border = '2px solid red';
  removeRedBorder(pencils[6]);
  colorVar = colorArr[6];
}
pencils[7].onclick = () => {
  pencils[7].style.border = '2px solid red';
  removeRedBorder(pencils[7]);
  colorVar = colorArr[7];
}
pencils[8].onclick = () => {
  pencils[8].style.border = '2px solid red';
  removeRedBorder(pencils[8]);
  colorVar = colorArr[8];
}
pencils[9].onclick = () => {
  pencils[9].style.border = '2px solid red';
  removeRedBorder(pencils[9]);
  colorVar = colorArr[9];
}
