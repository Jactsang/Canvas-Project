let canvasReal = document.getElementById('canvas-real');
let contextReal = canvasReal.getContext('2d');
let canvasDraft = document.getElementById('canvas-draft');
let contextDraft = canvasDraft.getContext('2d');
let currentFunction;
let dragging = false;
let restorePoints = [];
let redoList = [];


$('#canvas-draft').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX,mouseY],e);
    dragging = true;
});

$('#canvas-draft').mousemove(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(dragging){
        currentFunction.onDragging([mouseX,mouseY],e);
    }
    currentFunction.onMouseMove([mouseX,mouseY],e);
});

$('#canvas-draft').mouseup(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX,mouseY],e);
});

$('#canvas-draft').mouseleave(function(e){
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX,mouseY],e);
});

$('#canvas-draft').mouseenter(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX,mouseY],e);
});

function saveRestorePoint() {
    var imgSrc = canvasReal.toDataURL("image/png");
    restorePoints.push(imgSrc);
}

function undoDrawOnCanvas() {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);
    picUndo = restorePoints.pop();
    redoList.push(picUndo);

    for (var i = 0; i < restorePoints.length; i++) {
        var img = new Image();
        img.onload = function() {
            contextReal.drawImage(img, 0, 0);
        };
        img.src = restorePoints[i];
    }
}

function redoDrawOnCanvas() {
    contextReal.clearRect(0, 0, canvasReal.width, canvasReal.height);

    for (var i = 0; i < redoList.length; i++) {
        var img = new Image();
        img.onload = function() {
            contextReal.drawImage(img, 0, 0);
        };
        img.src = redoList[i];  
    }

    picRedo = redoList.pop();
    restorePoints.push(picRedo);
    
}

class PaintFunction{
    constructor(){}
    onMouseDown(){}
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}
}    

$('.animals-icon').hide();
$('#textbox').hide();

$('#btnStamp').hover(function(){
    $('.animals-icon').show();
});

$('.animals-icon').hover(function(){
    $('.animals-icon').show();
});

$('#btnStamp').mouseleave(function(){
    $('.animals-icon').hide();
});

$('.animals-icon').mouseleave(function(){
    $('.animals-icon').hide();
});


$('.animals-icon img').click(function() {
  $('.active').removeClass('active');
  $(this).addClass('active');
});

// color pickers

$('#strokecolor-picker').hide();
$('#fillcolor-picker').hide();


$('#strokecolor-label').click(function(){

    $('#strokecolor-picker').show();
});

$('#fillcolor-input').click(function(){

    $('#fillcolor-picker').show();
});