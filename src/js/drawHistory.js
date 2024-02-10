import { createGenericContainer, createSpecificContainer } from './helpers';
import { Storage } from './Storage';
import { Draw } from './draw';

export class DrawHistory {
    constructor(userSelection) {
        this.userSelection = userSelection;
        this.data = [];
        this.fetchRelatedDraws(this.userSelection);
        this.displayHandler();
    }
    fetchRelatedDraws(userSelection) {
        Storage.data.forEach((obj)=> {
            const blueBsCount = this.comparesNumbers(userSelection.blueBalls, obj.blueBalls);
            const yellowBsCount =  this.comparesNumbers(userSelection.yellowBalls, obj.yellowBalls);
            const total = blueBsCount + yellowBsCount;
            const objCopy = {
                ...obj,
            }
            objCopy.id = (objCopy.id *10);// Changing of id to not interact with last-results node's ids
            if(total >= userSelection.min) { this.data.push(objCopy) }
        })
    }
    comparesNumbers(userBalls, storageBalls) {
        let count = 0;
        userBalls.forEach((ball)=>{
            if(storageBalls.includes(ball)) { count ++ }
        })
        return count;
    }

    displayHandler() {
        const mainContainer = 
        createGenericContainer(
        'feedback',
        `${this.data.length} combinations found among ${Storage.data.length} draws`, 
        'blue-banner--med'
        );
        const speContainer = 
        createSpecificContainer(mainContainer, ['feedback__bubble', 'feedback__bubble--drawHistory'], 'section');
        const speContainerId = this.createInnerSreen(speContainer);
        this.displayDraws(this.data, speContainerId);
    }
    createInnerSreen(speContainer) {
        const innerScreen = document.createElement('div');
        innerScreen.classList.add('innerScreen');
        innerScreen.id= 'innerScreen';
        speContainer.appendChild(innerScreen);
        return innerScreen.id;
    }
    displayDraws(data, parentNodeId) {
        if(this.data.length) {
            data.forEach((obj)=> {
                new Draw(obj, parentNodeId);
                this.renderBallsOpaque(obj.id, this.userSelection.blueBalls, 'blue');
                this.renderBallsOpaque(obj.id, this.userSelection.yellowBalls, 'yellow');
            })
        } else { 
            const templtMess = document.getElementById('innerScreenTempltMess');
            const mess = templtMess.content.cloneNode(true);
            document.getElementById(`${parentNodeId}`).appendChild(mess);
        }
    }
    renderBallsOpaque(dataObjId, userSelection, color) {
        const draw = document.getElementById(`${dataObjId}`) 
        const ballsList = draw.querySelectorAll(`.ball--${color}`);
        ballsList.forEach((ball)=> {
            if(!userSelection.includes(parseInt(ball.textContent))) {
                ball.classList.remove(`ball--${color}`);
                ball.classList.add(`ball--transparent-${color}`);
            }
        })
    }
}