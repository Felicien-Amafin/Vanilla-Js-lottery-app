export class Draw {
    constructor(drawObj, parentNodeId) {
        this.drawObj = drawObj;
        this.parentNodeId = parentNodeId;
        this.createDraw(this.drawObj);
    }
    createDraw(drawObj) {
        const draw = document.createElement('div');
        draw.classList.add('draw');
        draw.id = drawObj.id;
        draw.innerHTML = `
        <h3 id="draw__date" class="draw__date">${drawObj.date}</h3>
            <div class="draw__balls">
                <ul class="draw__balls-5">
                </ul>
                <ul class="draw__balls-2">
                </ul>
            </div>
        `
        document.getElementById(`${this.parentNodeId}`).insertAdjacentElement('beforeend', draw);
        this.renderBalls(drawObj.blueBalls, draw.id, 'blue');
        this.renderBalls(drawObj.yellowBalls, draw.id, 'yellow');
    }
    renderBalls(ballsToRender, parentNodeId, ballColor) {
        let ballsContainer;
        const parentNode = document.getElementById(`${parentNodeId}`)
        if(ballColor === 'blue') { 
            ballsContainer = parentNode.querySelector('.draw__balls-5');
        } else if(ballColor === 'yellow') { 
            ballsContainer = parentNode.querySelector('.draw__balls-2');
        }
        ballsToRender.forEach((ball)=> {
            ballsContainer.insertAdjacentHTML('beforeend', `<li class="ball ball--${ballColor}"> ${ball} </li>`);
        });
    }
}