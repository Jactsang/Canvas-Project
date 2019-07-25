/* ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

*/

class DrawingTriangle extends PaintFunction{
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
        this.contextDraft.strokeStyle = strokeColorLabel.style.backgroundColor;
        this.contextDraft.fillStyle = fillColorLabel.style.backgroundColor;
        //let radius = Math.abs(coord[0]- this.origX);
        //this.contextDraft.arc(this.origX,this.origY, radius, 0, 2 * Math.PI, false);
        this.contextDraft.lineWidth = 5;

        // distance between two points
        
        var xChange = coord[0]-this.origX;
        var yChange = coord[1]-this.origY;
        var xChangeSquare = Math.pow(xChange,2);
        var yChangeSquare = Math.pow(yChange,2);
        var pointBX,pointBY,pointCX,pointCY;

        var coordDistance = Math.sqrt(xChangeSquare+yChangeSquare);

        if (xChange===0){

            pointBY = coord[1];
            pointCY = coord[1];
            pointBX = coord[1]-coordDistance/2;
            pointCX = coord[1]+coordDistance/2;

        }else if(yChange === 0){

            pointBX = coord[0];
            pointCX = coord[0];
            pointBY = coord[0]-coordDistance/2;
            pointCY = coord[0]+coordDistance/2;
        }else{

            if(xChange>0 && yChange>0){

                pointBX = coord[0]-coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]+coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }else if(xChange>0 && yChange<0){

                pointBX = coord[0]+coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]-coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }else if(xChange<0 && yChange<0){

                pointBX = coord[0]-coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]+coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }else if(xChange<0 && yChange>0){

                pointBX = coord[0]+coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]-coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }
        };

        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(pointBX, pointBY);
        this.contextDraft.lineTo(pointCX, pointCY);
        this.contextDraft.lineTo(this.origX, this.origY);
        //ctx.fill();
        this.contextDraft.stroke();
        this.contextDraft.fill();
        this.contextDraft.closePath();

    }

    onMouseMove(){}
    onMouseUp(coord){

        var xChange = coord[0]-this.origX;
        var yChange = coord[1]-this.origY;
        var xChangeSquare = Math.pow(xChange,2)
        var yChangeSquare = Math.pow(yChange,2);
        var pointBX,pointBY,pointCX,pointCY;

        var coordDistance = Math.sqrt(xChangeSquare+yChangeSquare);

        if (xChange===0){

            pointBY = coord[1];
            pointCY = coord[1];
            pointBX = coord[1]-coordDistance/2;
            pointCX = coord[1]+coordDistance/2;

        }else if(yChange === 0){

            pointBX = coord[0];
            pointCX = coord[0];
            pointBY = coord[0]-coordDistance/2;
            pointCY = coord[0]+coordDistance/2;
        }else{

            if(xChange>0 && yChange>0){

                pointBX = coord[0]-coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]+coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }else if(xChange>0 && yChange<0){

                pointBX = coord[0]+coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]-coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }else if(xChange<0 && yChange<0){

                pointBX = coord[0]-coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]+coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }else if(xChange<0 && yChange>0){

                pointBX = coord[0]+coordDistance/2;
                pointBY = coord[1]+coordDistance/2;
                pointCX = coord[0]-coordDistance/2;
                pointCY = coord[1]-coordDistance/2;

            }
        };

        this.contextReal.strokeStyle = strokeColorLabel.style.backgroundColor;
        this.contextReal.fillStyle = fillColorLabel.style.backgroundColor;
        this.contextReal.lineWidth = 5;
        this.contextReal.beginPath();
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.contextReal.moveTo(this.origX, this.origY);
        this.contextReal.lineTo(pointBX, pointBY);
        this.contextReal.lineTo(pointCX, pointCY);
        this.contextReal.lineTo(this.origX, this.origY);
        this.contextReal.stroke();
        this.contextReal.fill();
        saveRestorePoint();

    }
    onMouseLeave(){}
    onMouseEnter(){}
}