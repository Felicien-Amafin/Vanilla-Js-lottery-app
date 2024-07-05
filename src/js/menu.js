import { Keyboard } from "./keyboard";
import { Ranking } from "./ranking";
import { SearchTool } from "./searchTool";
import { UiGapResult } from "./uiGapResult";
import { UiBestFriendsResult } from "./uiBestFriendsResult";

export class Menu {
    static funcs = [
        Keyboard.display,
        this.displayRanking,
        this.countGap,
        this.findBestFriends,
    ];
    
    static addClickListeners() {
        // Add click listeners on each menu's li
        const menu = document.getElementById('menu');
        const liList = menu.querySelectorAll('li');
        let i = 0;
        this.funcs.forEach((func)=> {
            liList[i].addEventListener('click', func);
            i ++;
        })
    }
    static displayRanking() {
        new Ranking(); //Display number of appearence for each numbers
    }
    static countGap() {
        const ui = new UiGapResult();
        new SearchTool("Since how many draws your number hasn't appeared?", ui);
    }
    static findBestFriends() {
        const ui = new UiBestFriendsResult();
        new SearchTool('Find your favorite number best(s) friend(s)', ui);
    }
}