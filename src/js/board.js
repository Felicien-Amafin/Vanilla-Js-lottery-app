export class Board {
    constructor(mainCell1, mainCell2, id, array, parentNode) {
        this.id = id;
        this.mainCell1 = mainCell1;
        this.mainCell2 = mainCell2;
        this.array = array;
        this.parentNode = parentNode;
        this.color = mainCell1 === 'Blue balls'? 'blue': 'yellow';
        this.createBoard(this.array);
    }
    createBoard(array) {
        const boardEl = this.addMainCells(this.mainCell1, this.mainCell2, this.id, this.parentNode, this.color);
        array.forEach((obj) => {
            this.addSubCells(obj.num, obj.count, boardEl);
        });
        
    }
    addMainCells(mainCell1, mainCell2, boardId, parentNode, color) {
        const boardEl = document.createElement('section');
        boardEl.id = boardId;
        boardEl.classList.add('board');
        boardEl.innerHTML = `
        <ul class="board__cells">
            <li class="board__cell board__cell--${color}">${mainCell1}</li>
            <li class="board__cell">${mainCell2}</li>
        </ul>
        `
        parentNode.insertAdjacentElement('beforeend', boardEl)
        return boardEl;
    }
    addSubCells(cell1, cell2, parentNode) {
        const cells = document.createElement('ul');
        cells.classList.add('board__cells');
        cells.innerHTML = `
        <li class="board__cell board__cell--blue">${cell1}</li>
        <li class="board__cell">${cell2}</li>
     
        `
        parentNode.insertAdjacentElement('beforeend', cells);
    }
}