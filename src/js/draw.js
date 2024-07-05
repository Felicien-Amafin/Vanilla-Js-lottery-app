export class Draw {
    constructor(draw, parentNodeId) {
        this.draw = draw;
        this.parentNodeId = parentNodeId;
        this.createDraw(this.draw);
    }
    createDraw(obj) {
        const draw = document.createElement('div');
        draw.classList.add('draw');
        draw.id = obj.id;
        draw.innerHTML = `
        <h3 class="draw__date">${obj.date}</h3>
            <div class="draw__balls">
                <ul class="draw__balls-blue">
                </ul>
                <ul class="draw__balls-yellow">
                </ul>
            </div>
        `
        document.getElementById(`${this.parentNodeId}`).insertAdjacentElement('beforeend', draw);
        this.addBalls('blue', obj.blueBalls, obj.id);
        this.addBalls('yellow', obj.yellowBalls, obj.id);
    }
    addBalls(color, balls, drawId) {
        const draw = document.getElementById(`${drawId}`);
        const ballContainer = draw.querySelector(`.draw__balls-${color}`);
        balls.forEach((ball)=> {
            ballContainer.insertAdjacentHTML('beforeend', `<li class="ball ball--${color}">${ball}</li>`)
        })
    }
}