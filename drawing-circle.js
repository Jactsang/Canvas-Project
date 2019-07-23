class DrawingCircle extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;            
    }
    
    onMouseDown(coord,event){

        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord,event){
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextDraft.strokeStyle = "#000";
        let radius = Math.abs(coord[0]- this.origX);
        this.contextDraft.arc(this.origX,this.origY, radius, 0, 2 * Math.PI, false);
        this.contextDraft.lineWidth = 5;
        this.contextDraft.stroke();
        this.contextDraft.closePath();

    }

    onMouseMove(){}
    onMouseUp(coord){
        this.contextReal.strokeStyle = "#000";
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        let radius = Math.abs(coord[0]- this.origX);
        this.contextReal.arc(this.origX,this.origY, radius, 0, 2 * Math.PI, false);
        this.contextReal.lineWidth = 5;
        this.contextReal.stroke();
        saveRestorePoint();

    }
    onMouseLeave(){}
    onMouseEnter(){}
}