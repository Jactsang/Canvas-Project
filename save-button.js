var pic=0;

    function download() {
        pic++;
        var download = document.getElementById("download");
        var image = document.getElementById("canvas-real").toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        download.setAttribute("download", `pic-${pic}.png`);
        download.setAttribute("href", image);
        //download.setAttribute("download","archive.png");
        }