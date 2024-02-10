import { Board } from './board';
import { createGenericContainer, createSpecificContainer } from './helpers';
import { Storage} from './Storage';

export class RankingBoardsList {
    constructor() {
        this.blueBalls = [];
        this.yellowBalls = [];
        this.generic;
        this.createSpecific;
        this.countNum(1, 50, Storage.data, 'blueBalls');
        this.countNum(1, 12, Storage.data, 'yellowBalls');
        this.display();
    }
    countNum(min, max, storage, ballColor) {
        let count = 0;
        for(let i = min; i <= max ; i ++) {
            storage.forEach(obj => {
                if(obj[`${ballColor}`].includes(i)) { count ++; }
            });
            if(ballColor === 'blueBalls') {
                this.blueBalls.push({ num: i, count: count});
            } else if(ballColor === 'yellowBalls') {
                this.yellowBalls.push({ num: i, count: count});
            }
            count = 0;
        }
    }
    display = ()=> {
        const mainContainer = createGenericContainer('ranking-boards', 'Numbers and their number of appearence', '');
        const parentNode = createSpecificContainer(mainContainer, ['ranking-boards__boards'], 'section');
        this.addBoards(5, 10, this.blueBalls, parentNode, 'blue');
        this.addBoards(2, 6, this.yellowBalls, parentNode, 'yellow');
    }
    addBoards(maxBoard, maxNum, ballsArray, parentNode, color) {
        let packet = [];
        let i = 0;
        let y = maxNum;
        let count = 0;
        let boardTitle;
        boardTitle = color === 'blue' ? 'Blue balls': 'Yellow balls';

        while(count < (maxBoard * maxNum)) {
            for(; i < y; i ++) {
                packet.push(ballsArray[i]);
            }
            new Board(boardTitle, 'Nbr of appearences', y, packet, parentNode);
            i = y;
            y += maxNum;
            count += maxNum;
            packet = [];
        }
    }
}