import { createGenericContainer, createSpecificContainer } from './helpers';
import { Draws } from './Data/draws';

export class UiGapResult {
    display(userObj) {
        const mainContainer = createGenericContainer(
            'feedback', 
            'Feedback for your number', 
            'blue-banner--med'
        );
        const speContainer = createSpecificContainer(mainContainer, ['feedback__bubble', 'feedback__bubble--drawGap'], 'section');
        const gap = this.countGap(userObj);
        this.addContent(speContainer, userObj, gap);
    }
    addContent(parentNode, userObj, gap) {
        parentNode.innerHTML = `
        <div id="num" class="num">
            <span>Number:</span>
            <span id="num-sought" class="ball ball--blue">${userObj.numInput}</span>
        </div>
        `
        if(gap > 0) {
            parentNode.insertAdjacentHTML('beforeend', `
            <div id="result-declaration" class="result-declaration">
                <span>hasn't appeared since</span>
                <span id="result-declaration">${gap}</span> 
                <span>draw(s).</span> 
            </div>
            `)
        } else {
            parentNode.insertAdjacentHTML('beforeend', `
            <div id="result-declaration" class="result-declaration">
                <p>Has appeared in last draw.</p>
            </div>
            `)
        }
    }
    countGap(userObj) {
        let count = 0;
        const ballsColor = userObj.checked === 'blue-b' ? 'blueBalls' : 'yellowBalls'; 
        for(let i = 0; i < Draws.draws.length; i ++) {
            if(!Draws.draws[i][`${ballsColor}`].includes(userObj.numInput)) {
                count ++;
            } else { break; }
        }
        return count;
    }
}