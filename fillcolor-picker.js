var fillColorBlock = document.getElementById('fillcolor-block');
var contextFillBlock = fillColorBlock.getContext('2d');
var widthFill1 = fillColorBlock.width;
var heightFill1 = fillColorBlock.height;

var fillColorStrip = document.getElementById('fillcolor-strip');
var contextFillStrip = fillColorStrip.getContext('2d');
var widthFill2 = fillColorStrip.width;
var heightFill2 = fillColorStrip.height;

var fillColorLabel = document.getElementById('fillcolor-label');

var fillX = 0;
var fillY = 0;
var dragfill = false;
var rgbaColorFill = 'rgba(255,0,0,1)';
contextFillBlock.rect(0, 0, widthFill1, heightFill1);
fillGradientFill();

contextFillStrip.rect(0, 0, widthFill2, heightFill2);
var grdFill = contextFillStrip.createLinearGradient(0, 0, 0, heightFill1);
grdFill.addColorStop(0, 'rgba(255, 0, 0, 1)');
grdFill.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grdFill.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grdFill.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grdFill.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grdFill.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grdFill.addColorStop(1, 'rgba(255, 0, 0, 1)');
contextFillStrip.fillStyle = grdFill;
contextFillStrip.fill();

function clickFill(e) {
  fillX = e.offsetX;
  fillY = e.offsetY;
  var imageDataFill = contextFillStrip.getImageData(fillX, fillY, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  fillGradientFill();
}

function fillGradientFill() {
  contextFillBlock.fillStyle = rgbaColorFill;
  contextFillBlock.fillRect(0, 0, widthFill1, heightFill1);

  var grdFillWhite = contextFillStrip.createLinearGradient(0, 0, widthFill1, 0);
  grdFillWhite.addColorStop(0, 'rgba(255,255,255,1)');
  grdFillWhite.addColorStop(1, 'rgba(255,255,255,0)');
  contextFillBlock.fillStyle = grdFillWhite;
  contextFillBlock.fillRect(0, 0, widthFill1, heightFill1);

  var grdFillBlack = contextFillStrip.createLinearGradient(0, 0, 0, heightFill1);
  grdFillBlack.addColorStop(0, 'rgba(0,0,0,0)');
  grdFillBlack.addColorStop(1, 'rgba(0,0,0,1)');
  contextFillBlock.fillStyle = grdFillBlack;
  contextFillBlock.fillRect(0, 0, widthFill1, heightFill1);
}

function mousedownFill(e) {
  dragFill = true;
  changeColorFill(e);
}

function mousemoveFill(e) {
  if (dragFill) {
    changeColorFill(e);
  }
}

function mouseupFill(e) {
  dragFill = false;
}

function changeColorFill(e) {
  fillX = e.offsetX;
  fillY = e.offsetY;
  var imageDataFill = contextFillBlock.getImageData(fillX, fillY, 1, 1).data;
  rgbaColorFill = 'rgba(' + imageDataFill[0] + ',' + imageDataFill[1] + ',' + imageDataFill[2] + ',1)';
  fillColorLabel.style.backgroundColor = rgbaColorFill;
}

fillColorStrip.addEventListener("click", clickFill, false);

fillColorBlock.addEventListener("mousedown", mousedownFill, false);
fillColorBlock.addEventListener("mouseup", mouseupFill, false);
fillColorBlock.addEventListener("mousemove", mousemoveFill, false);