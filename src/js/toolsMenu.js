export class ToolsMenu {
    static funcArray = [
        this.findNumsInPreviousDraws,
        this.calcNumbOfAppearences,
        this.calcNumbOfDrawsLate,
        this.findNumBestFriends,
        this.calcTop10
    ];
    /* static tool1 = this.findNumsInPreviousDraws;
    static tool2 = this.calcNumbOfAppearences;
    static tool3 = this.calcNumbOfDrawsLate;
    static tool4 = this.findNumBestFriends;
    static tool5 = this.calcTop10; */
    
    static addClickListeners() {
        const toolMenu = document.getElementById('tools__menu');
        const liList = toolMenu.querySelectorAll('li');
        let i = 0;
        this.funcArray.forEach((func)=> {
            liList[i].addEventListener('click', func);
            i ++;
        })
    }

    static findNumsInPreviousDraws() {
        
        console.log('findNumsInPreviousDraws');
    }

    static calcNumbOfAppearences() {
        console.log('calcNumbOfAppearences');
    }

    static calcNumbOfDrawsLate() {
        console.log('calcNumbOfDrawsLate');
    }

    static findNumBestFriends() {
        console.log('findNumBestFriends');
    }

    static calcTop10(dataObj) {
        dataObj.forEach((obj)=> {
            obj.yellowBalls
        })
        console.log('calcTop10');
    }
}