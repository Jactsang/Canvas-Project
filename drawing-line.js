/*ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(300, 150);
ctx.stroke();*/

class DrawingLine extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;   
               
    }
    
    onMouseDown(coord,event){
        this.startX = coord[0];
        this.startY = coord[1];

        console.log('mousedown')
    }
    onDragging(coord,event){
    this.contextDraft.strokeStyle = colorLabel.style.backgroundColor;
    this.contextDraft.lineJoin = "round";
    this.contextDraft.lineWidth = 5;
    this.contextDraft.beginPath();
    this.contextDraft.moveTo(this.startX,this.startY);
    this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
    this.contextDraft.lineTo(coord[0], coord[1]);
    this.contextDraft.stroke();
    console.log('mousedrag')
}
    onMouseMove(){}
    onMouseUp(coord,event){
        this.contextReal.strokeStyle = colorLabel.style.backgroundColor;
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.startX,this.startY);
        this.contextReal.lineTo(coord[0],coord[1]);
        this.contextReal.stroke();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        saveRestorePoint();

    }
    onMouseLeave(){
        this.contextReal.strokeStyle = " ";}
    onMouseEnter(){}

}
