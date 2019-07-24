class AddText extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;        
    }
    
    onMouseDown(coord,event){
        this.context.moveTo(coord[0],coord[1]);
        this.writeText(coord[0]-20,coord[1]+10);
    }
    onDragging(){}
    onMouseMove(){}
    onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    writeText(x,y){

        this.context.font = `${$('#fontsize').val()} Arial`;
        this.context.fillStyle = colorLabel.style.backgroundColor;
        this.context.fillText($('#textinput').val(), x, y);
        saveRestorePoint();
    
    }   
    
}

/*writeText(){

    contextReal.font = "30px Arial";
    contextReal.fillText($('#textinput').val(), 100, 100);
    saveRestorePoint();

}*/

  