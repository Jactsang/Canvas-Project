class DrawingRectangle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){
        this.contextReal.fillStyle = fillColorLabel.style.backgroundColor;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.fillStyle = fillColorLabel.style.backgroundColor;
        this.contextDraft.strokeStyle = strokeColorLabel.style.backgroundColor;
        this.contextDraft.lineWidth = 5;
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextDraft.stroke();
    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.strokeStyle = strokeColorLabel.style.backgroundColor;
        this.contextReal.fillStyle = fillColorLabel.style.backgroundColor;
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.rect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY);
        this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
        this.contextReal.stroke();
        saveRestorePoint();
    }
    onMouseLeave(){}
    onMouseEnter(){}
}