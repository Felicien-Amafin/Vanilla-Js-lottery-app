import { createGenericContainer, createSpecificContainer } from './helpers';
import { Draws } from './Data/draws';

export class UiBestFriendsResult {
    constructor() {
        this.bestFriends;
    }
    display(userObj) {
        const mainContainer = createGenericContainer(
            'feedback', 
            "Find your favorite number's best friend(s)", 
            'blue-banner--med'
        );
        const speContainer = createSpecificContainer(mainContainer, ['feedback__bubble', 'feedback__bubble--numBestFriends'], 'section');
        this.bestFriends = this.findBestFriends(userObj);
        this.addContent(speContainer, userObj, this.bestFriends);
    }
    addContent(parentNode, userObj, array) {
        parentNode.innerHTML = `
        <div id="num" class="num">
            <span>Number: </span>
            <span id="favorite__num" class="ball ball--blue">${userObj.numInput}</span>
        </div>
        <div id="result-declaration" class="result-declaration">
            <span>Appeared</span>
            <span id="result-declaration__num">${array[0].count}</span> 
            <span class="nowrap">times with number(s):</span>
        </div>
        <ul class="result__list"></ul>
        `
        const ul = document.querySelector('.result__list');
        array.forEach((obj)=> {
            ul.insertAdjacentHTML('beforeend', `<li class="ball ball--blue">${obj.num}</li>`);
        })
    }
    findBestFriends(userObj) {
        const ballsColor = userObj.checked === 'blue-b' ? 'blueBalls' : 'yellowBalls'; 
        const max = ballsColor === 'blueBalls' ? 50 : 12;
        let packet = [];
        let numsAndCount;
        Draws.draws.forEach((obj)=> {
            if(obj[ballsColor].includes(userObj.numInput)) {
                packet.push(obj[ballsColor]);
            }
        })
        numsAndCount = this.countNumsAppearences(packet, userObj, max);
        return this.getNumsWithMax(numsAndCount, this.findMax(numsAndCount));
    }
    countNumsAppearences(packet, userObj, max) {
        let numsAndCount = [];
        let count = 0;
        for(let i = 1; i <= max; i ++) {
            packet.forEach((array)=> {
                if((i !== userObj.numInput) && array.includes(i)) { count++ }
            })
            if((i !== userObj.numInput)) {
                numsAndCount.push({num: i, count: count});
                count = 0
            }
        }
        return numsAndCount;
    }
    findMax(array) {
        let max = 0;
        array.forEach((obj)=> {
            if(obj.count > max) {
                max = obj.count;
            }
        })
        return max;
    }
    getNumsWithMax(array, max) {
        let numsWithMax = [];
        array.forEach((obj)=> {
            if(obj.count === max) { numsWithMax.push(obj) }
        })
        return numsWithMax;
    }
}