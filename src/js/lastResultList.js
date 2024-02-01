import { Draw } from './draw.js';
import { Storage } from './Storage.js';

export class LastResultList {
    static fiftyLastDraws = [];
    static find50LastDraws(data, MIN, MAX) {
        for(let i = MIN; i < MAX; i ++ ) {
            this.fiftyLastDraws.push(data[i]);
        }
    }
    static display(fiftyLastDraws) {
        this.find50LastDraws(Storage.data, 0, 50);
        fiftyLastDraws.forEach((drawObj)=> {
            new Draw(drawObj, 'last-results__draws');
        })
    }
    

}