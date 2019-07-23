class AddImage extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event) {
        var image = new Image();
        image.src = url;

        image.onload =  () => {
                    this.context.drawImage(image, coord[0] - 50, coord[1] - 50, 100, 100);

        }
        saveRestorePoint();
    }

    onDragging() { }
    onMouseMove() { }
    onMouseUp() { 
        saveRestorePoint();}
    onMouseLeave() { }
    onMouseEnter() { }

}

$('#dog-1').click(function () {
    console.log('breaking chnages')
    currentFunction = new AddImage(contextReal);
    url = "./Assets/dog-icon-01.png";
});

$('#dog-1').mouseover(function () { $('#dog-1').addClass("btnShadow"); });
$('#dog-1').mouseleave(function () { $('#dog-1').removeClass("btnShadow"); });


$('#dog-2').click(function () {
    currentFunction = new AddImage(contextReal);
    url = "./Assets/dog-icon-02.png";
});
$('#dog-2').mouseover(function () { $('#dog-2').addClass("btnShadow"); });
$('#dog-2').mouseleave(function () { $('#dog-2').removeClass("btnShadow"); });


$('#cat').click(function () {
    $('#cat').addClass("btnShadow");
    currentFunction = new AddImage(contextReal);
    url = "./Assets/cat-icon-01.png";
});

$('#cat').mouseover(function () { $('#cat').addClass("btnShadow"); });
$('#cat').mouseleave(function () { $('#cat').removeClass("btnShadow"); });

$('#frog').click(function () {
    $('#frog').addClass("btnShadow");
    currentFunction = new AddImage(contextReal);
    url = "./Assets/frog-icon-01.png";
});
$('#frog').mouseover(function () { $('#frog').addClass("btnShadow"); });
$('#frog').mouseleave(function () { $('#frog').removeClass("btnShadow"); });


$('#rabbit').click(function () {
    $('#rabbit').addClass("btnShadow");
    currentFunction = new AddImage(contextReal);
    url = "./Assets/rabbit-icon-01.png";
});
$('#rabbit').mouseover(function () { $('#rabbit').addClass("btnShadow"); });
$('#rabbit').mouseleave(function () { $('#rabbit').removeClass("btnShadow"); });

$('#duck').click(function () {
    $('#duck').addClass("btnShadow");
    currentFunction = new AddImage(contextReal);
    url = "./Assets/duck-icon-01.png";
});
$('#duck').mouseover(function () { $('#duck').addClass("btnShadow"); });
$('#duck').mouseleave(function () { $('#duck').removeClass("btnShadow"); });







