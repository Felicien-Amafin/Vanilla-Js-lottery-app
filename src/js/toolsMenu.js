import { Keyboard } from "./keyboard";

export class ToolsMenu {
    static arrayFunc = [
        Keyboard.display
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
    
}