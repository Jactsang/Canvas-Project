

class EdgeSmoothing extends PaintFunction{
    constructor(contextReal){
        super();
        this.context = contextReal;            
    }
    
    onMouseDown(coord,event){
        //this.context.strokeStyle = "#000000";
        this.context.strokeStyle = strokeColorLabel.style.backgroundColor;
        this.context.lineWidth = 10;
        this.context.lineJoin = this.context.lineCap = 'round';
        this.context.shadowBlur = 10;
        this.context.shadowColor = strokeColorLabel.style.backgroundColor;
        //this.context.shadowColor = 'rgb(0, 0, 0)';
        this.context.beginPath();
        this.context.moveTo(coord[0],coord[1]);
        this.draw(coord[0],coord[1]);
    }
    onDragging(coord,event){
        this.draw(coord[0],coord[1]);
    }

    onMouseMove(){}
    onMouseUp(){
        this.context.shadowBlur = 0;
        this.context.shadowColor = '';
        saveRestorePoint();

    }
    onMouseLeave(){}
    onMouseEnter(){}

    draw(x,y){
        this.context.lineTo(x,y);
        this.context.moveTo(x,y);
        this.context.closePath();
        this.context.stroke();  }  

}
