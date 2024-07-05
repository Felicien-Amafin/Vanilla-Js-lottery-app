import { Draw } from './draw.js';
import { Draws } from './Data/draws.js';
 
export class LastResults {
    static lastDraws = [];

    static display(lastDraws) {
        //Getting the last thirty draws, before display.
        this.getLastDraws(Draws.draws, 0, 29);
        lastDraws.forEach((draw)=> { 
            new Draw(draw, 'draws'); 
        })
    } 
    static getLastDraws(data, MIN, MAX) {
        for(let i = MIN; i <= MAX; i ++ ) {
            this.lastDraws.push(data[i]);
        }
    }
    
}