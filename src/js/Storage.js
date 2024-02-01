export class Storage {
    static data = [];
    static dataInit(dataObj) {
        let currentDraw = dataObj.length;
        dataObj.forEach((obj)=> {
            let draw = {
                id: currentDraw,
                date: obj['date_de_tirage'],
                blueBalls: this.returnBallsArray(obj, 5, 'boule_'),
                yellowBalls: this.returnBallsArray(obj, 2, 'etoile_'),
            }
            this.data.push(draw);
            currentDraw --;
        })
    }
    static returnBallsArray(obj, MAX, string) {
        let storage = [];
        for(let i = 1; i <= MAX; i ++) {
            storage.push(obj[`${string}${i}`]);
        }
        return storage.sort((a,b)=>{
            return a - b;
        });
    }
}