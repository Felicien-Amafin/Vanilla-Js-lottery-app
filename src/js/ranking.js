import { Board } from './board';
import { createGenericContainer, createSpecificContainer } from './helpers';
import { Draws} from './Data/draws';

export class Ranking{
    constructor() {
        this.blueBalls = [];
        this.yellowBalls = [];
        this.display();
    }
    countNum(min, max, draws, ballColor) {
        let count = 0;
        for(let i = min; i <= max ; i ++) {
            draws.forEach(obj => {
                if(obj[`${ballColor}`].includes(i)) { count ++; }
            });
            if(ballColor === 'blueBalls') {
                this.blueBalls.push({ num: i, count: count});
            }
            if(ballColor === 'yellowBalls') {
                this.yellowBalls.push({ num: i, count: count});
            }
            count = 0;
        }
    }
    display(){
        const mainContainer = createGenericContainer('ranking-boards', 'Number of appearence for each numbers among 415 draws', '');
        const parentNode = createSpecificContainer(mainContainer, ['ranking-boards__boards'], 'section');
        //determines the number of appearances for each blue balls (ranging from 1 to 50)
        this.countNum(1, 50, Draws.draws, 'blueBalls'); 
        //determines the number of appearances for each yellow balls (ranging from 1 to 12)
        this.countNum(1, 12, Draws.draws, 'yellowBalls');
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
            for(; i < y; i ++) { packet.push(ballsArray[i]); }
            new Board(boardTitle, 'Nbr of appearences', y, packet, parentNode);
            i = y;
            y += maxNum;
            count += maxNum;
            packet = [];
        }
    }
}