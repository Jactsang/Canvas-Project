var strokeColorBlock = document.getElementById('strokecolor-block');
var contextStrokeBlock = strokeColorBlock.getContext('2d');
var widthStroke1 = strokeColorBlock.width;
var heightStroke1 = strokeColorBlock.height;

var strokeColorStrip = document.getElementById('strokecolor-strip');
var contextStrokeStrip = strokeColorStrip.getContext('2d');
var widthStroke2 = strokeColorStrip.width;
var heightStroke2 = strokeColorStrip.height;

var strokeColorLabel = document.getElementById('strokecolor-label');

var strokeX = 0;
var strokeY = 0;
var dragStroke = false;
var rgbaColorStroke = 'rgba(255,0,0,1)';
contextStrokeBlock.rect(0, 0, widthStroke1, heightStroke1);
fillGradientStroke();

contextStrokeStrip.rect(0, 0, widthStroke2, heightStroke2);
var grdStroke = contextStrokeStrip.createLinearGradient(0, 0, 0, heightStroke1);
grdStroke.addColorStop(0, 'rgba(255, 0, 0, 1)');
grdStroke.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grdStroke.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grdStroke.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grdStroke.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grdStroke.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grdStroke.addColorStop(1, 'rgba(255, 0, 0, 1)');
contextStrokeStrip.fillStyle = grdStroke;
contextStrokeStrip.fill();

function clickStroke(e) {
  strokeX = e.offsetX;
  strokeY = e.offsetY;
  var imageDataStroke = contextStrokeStrip.getImageData(strokeX, strokeY, 1, 1).data;
  rgbaColorStroke = 'rgba(' + imageDataStroke[0] + ',' + imageDataStroke[1] + ',' + imageDataStroke[2] + ',1)';
  fillGradientStroke();
}

function fillGradientStroke() {
  contextStrokeBlock.fillStyle = rgbaColorStroke;
  contextStrokeBlock.fillRect(0, 0, widthStroke1, heightStroke1);

  var grdStrokeWhite = contextStrokeStrip.createLinearGradient(0, 0, widthStroke1, 0);
  grdStrokeWhite.addColorStop(0, 'rgba(255,255,255,1)');
  grdStrokeWhite.addColorStop(1, 'rgba(255,255,255,0)');
  contextStrokeBlock.fillStyle = grdStrokeWhite;
  contextStrokeBlock.fillRect(0, 0, widthStroke1, heightStroke1);

  var grdStrokeBlack = contextStrokeStrip.createLinearGradient(0, 0, 0, heightStroke1);
  grdStrokeBlack.addColorStop(0, 'rgba(0,0,0,0)');
  grdStrokeBlack.addColorStop(1, 'rgba(0,0,0,1)');
  contextStrokeBlock.fillStyle = grdStrokeBlack;
  contextStrokeBlock.fillRect(0, 0, widthStroke1, heightStroke1);
}

function mousedownStroke(e) {
  dragStroke = true;
  changeColorStroke(e);
}

function mousemoveStroke(e) {
  if (dragStroke) {
    changeColorStroke(e);
  }
}

function mouseupStroke(e) {
  dragStroke = false;
}

function changeColorStroke(e) {
  strokeX = e.offsetX;
  StrokeY = e.offsetY;
  var imageDataStroke = contextStrokeBlock.getImageData(strokeX, strokeY, 1, 1).data;
  rgbaColorStroke = 'rgba(' + imageDataStroke[0] + ',' + imageDataStroke[1] + ',' + imageDataStroke[2] + ',1)';
  strokeColorLabel.style.backgroundColor = rgbaColorStroke;
}

strokeColorStrip.addEventListener("click", clickStroke, false);

strokeColorBlock.addEventListener("mousedown", mousedownStroke, false);
strokeColorBlock.addEventListener("mouseup", mouseupStroke, false);
strokeColorBlock.addEventListener("mousemove", mousemoveStroke, false);