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
        <h3 class="draw__date">${drawObj.date}</h3>
            <div class="draw__balls">
                <ul class="draw__balls-blue">
                </ul>
                <ul class="draw__balls-yellow">
                </ul>
            </div>
        `
        document.getElementById(`${this.parentNodeId}`).insertAdjacentElement('beforeend', draw);
        this.addBalls('blue', drawObj.blueBalls, draw.id)
        this.addBalls('yellow', drawObj.yellowBalls, draw.id)
    }
    addBalls(color, ballsArray, drawId) {
        const draw = document.getElementById(`${drawId}`);
        const ballContainer = draw.querySelector(`.draw__balls-${color}`);
        ballsArray.forEach((ball)=> {
            ballContainer.insertAdjacentHTML('beforeend', `<li class="ball ball--${color}">${ball}</li>`)
        })
    }
}