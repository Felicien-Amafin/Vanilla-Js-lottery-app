export class Draws {
    static draws = [];

    static initDraws(data) {
        //Creating obj for each draw then pushing it into draws
        let drawId = data.length;
        data.forEach((obj)=> {
            let draw = {
                id: drawId, //Storing id
                date: obj['date_de_tirage'],//Storing draw date
                blueBalls: this.returnBalls(obj, 5, 'boule_'), //Storing the 5 blue balls
                yellowBalls: this.returnBalls(obj, 2, 'etoile_'), //Storing the 2 yellow balls
            }
            this.draws.push(draw);
            drawId --;
        })
    }
    static returnBalls(obj, MAX, string) {
        //Sort and return balls
        let balls = [];
        for(let i = 1; i <= MAX; i ++) {
            balls.push(obj[`${string}${i}`]);
        }
        return balls.sort((a,b)=>{
            return a - b;
        });
    }
}