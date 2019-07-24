var pic=1;

function download() {
    pic++;
    $('.buttons a').attr("download", `pic-${pic}.png`);
    var download = document.getElementById("download");
    var image = document.getElementById("canvas-real").toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
    $('body').css("cursor","url('./Assets/brush-01.png'), auto");
    }