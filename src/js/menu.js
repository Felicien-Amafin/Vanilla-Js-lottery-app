import { Keyboard } from "./keyboard";
import { RankingBoardsList } from "./rankingBoardsList";
import { SearchTool } from "./searchTool";

export class Menu {
    static arrayFunc = [
        Keyboard.displayHandler,
        this.displayRankingBList,
        this.displaySearchTool,
    ];
    
    static addClickListeners() {
        const toolsMenu = document.getElementById('tools__menu');
        const liList = toolsMenu.querySelectorAll('li');
        let i = 0;
        this.arrayFunc.forEach((func)=> {
            liList[i].addEventListener('click', func);
            i ++;
        })
    }
    static displayRankingBList() {
        new RankingBoardsList();
    }
    static displaySearchTool() {
        new SearchTool();
    }
}