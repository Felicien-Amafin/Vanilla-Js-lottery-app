import { Draw } from './draw.js';
import { Storage } from './Storage.js';

export class LastResultsList {
    static thirtyLastDraws = [];
    static display(thirtyLastDraws) {
        this.find50LastDraws(Storage.data, 0, 30);
        thirtyLastDraws.forEach((drawObj)=> {
            new Draw(drawObj, 'last-results__draws');
        })
    } 
    static find50LastDraws(data, MIN, MAX) {
        for(let i = MIN; i <= MAX; i ++ ) {
            this.thirtyLastDraws.push(data[i]);
        }
    }
    
}