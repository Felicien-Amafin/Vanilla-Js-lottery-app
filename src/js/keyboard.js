import { DrawHistory } from "./drawHistory";

export class Keyboard {
    static page;
    static countBlue = 0;
    static countYellow = 0;
    static selectedBalls = {
        blueBalls: [],
        yellowBalls: [],
        min:'',
    };
    static display = ()=> {
        this.appendNode();
        this.renderKeyboardKeys(1, 50, 'blue');
        this.renderKeyboardKeys(1, 12, 'yellow');
        this.addEvListenerToKeys('blue', 5, this.countBlue);
        this.addEvListenerToKeys('yellow', 2, this.countYellow);
        this.addClosingCrossEvListener(this.page);
        this.addDropDownInput(this.page);
        this.addBtnEventListener(this.page);
    }
    static appendNode() {
        //Gets content of keyboard template + appends keyboard to page
        const page = document.getElementById('page');
        this.page = page;
        const KeyboardTemplt = document.getElementById('keyboard-templt');
        const keyboard = KeyboardTemplt.content.cloneNode(true);
        this.disableBtn(keyboard);
        page.appendChild(keyboard);
    }
    static renderKeyboardKeys(MIN, MAX, color) {
        const keyboard = document.getElementById('keyboard');
        let kbKeysContainer;
        if(color === 'blue') {
            kbKeysContainer = keyboard.querySelector('.keyboard__blue-keys');
        } else if(color === 'yellow') {
            kbKeysContainer = keyboard.querySelector('.keyboard__yellow-keys');
        }
        for(let i = MIN; i <= MAX; i ++ ) {
            kbKeysContainer.insertAdjacentHTML('beforeend', 
            `<li class="keyboard-key keyboard-key--${color}">${i}</li>`
            );
        }
    }
    static addEvListenerToKeys(keyColor, maxKey, keyCount) {
        const keyboard = document.getElementById('keyboard');
        const keysContainer = keyboard.querySelector(`.keyboard__${keyColor}-keys`);
        keysContainer.addEventListener('click', (event)=> {
            const bool = event.target.classList.contains(`keyboard__${keyColor}-keys`);
            if(!bool) {
                if(keyCount < maxKey) {
                    event.target.classList.toggle(`keyboard-key__clicked--${keyColor}`);
                    const bool = event.target.classList.contains(`keyboard-key__clicked--${keyColor}`);
                    bool? (keyCount+=1) : (keyCount-= 1);
                    if(keyCount === maxKey) { 
                        this.addKeyDisabled(keyColor, keysContainer);
                        this.enableBtn(keyColor, keyboard);
                    }
                }
                else if
                (
                    event.target.classList.contains(`keyboard-key__clicked--${keyColor}`) &&
                    keyCount === maxKey
                ) { 
                    event.target.classList.toggle(`keyboard-key__clicked--${keyColor}`);
                    this.removeKeyDisabled(keyColor, keysContainer);
                    this.disableBtn(keyboard);
                    keyCount --;
                }
            }
        });
    }
    static addKeyDisabled(keyColor, keysContainer ) {
        const keysList = keysContainer.querySelectorAll(`.keyboard-key--${keyColor}`);
        keysList.forEach((key)=> {
            if(!key.classList.contains(`keyboard-key__clicked--${keyColor}`)) { 
                key.classList.add(`keyboard-key__disabled--${keyColor}`);
            }
        })
    }
    static enableBtn(keyColor, keyboard) {
        const color = keyColor === 'blue' ? 'yellow' : 'blue';
        if(document.querySelector(`.keyboard-key__disabled--${color}`)) {
            //Enable btn
            const btn = keyboard.querySelector('#keyboard__btn');
            btn.disabled = false;
            btn.classList.remove('btn--disabled');
            btn.classList.add('btn--enabled');
        }
    }
    static disableBtn(keyboard) {
        const btn = keyboard.querySelector('#keyboard__btn');
        btn.disabled = true;
        btn.classList.add('btn--disabled');
        btn.classList.remove('btn--enabled');
    }
    static removeKeyDisabled(keyColor, keysContainer) {
        const keysList = keysContainer.querySelectorAll(`.keyboard-key--${keyColor}`);
        keysList.forEach((key)=> {
            if(key.classList.contains(`keyboard-key__disabled--${keyColor}`)) { 
                key.classList.remove(`keyboard-key__disabled--${keyColor}`);
            }
        })
    }
    static addClosingCrossEvListener(page) {
        const closingCross = page.querySelector('#keyboard__closing-cross');
        closingCross.addEventListener('click', ()=> {
            this.resetClassVariables();
            page.querySelector('.overlay').remove();
        });
    }
    static addDropDownInput(parentNode) {
        const dropDown = parentNode.querySelector('.drowpDownInput');
        for(let i = 2; i <= 7; i ++) {
            dropDown.insertAdjacentHTML('beforeend', `<option value="${i}">${i}</option>`);
        }
    }
    static addBtnEventListener(page) {
        const btn = page.querySelector('#keyboard__btn');
        btn.addEventListener('click', ()=> {
            this.storeSelectedBalls(['blue', 'yellow'])
            document.getElementById('overlay').remove(); // remove keyBoard
            new DrawHistory(this.selectedBalls); 
            this.resetClassVariables();
        });
    }
    static storeSelectedBalls(colorArray) {
        let colorContainer ; 
        let keysList;
        colorArray.forEach((color)=> {
            colorContainer = document.getElementById(`keyboard__${color}-keys`);
            keysList = colorContainer.querySelectorAll('li');
            keysList.forEach((key)=> {
                if(key.classList.contains(`keyboard-key__clicked--${color}`)) {
                    this.selectedBalls[`${color}Balls`].push(parseInt(key.innerHTML));
                }
            });
        });
        this.selectedBalls.min = parseInt(document.getElementById('drowpDownInput').value);
    }
    static resetClassVariables() {
        this.countBlue  = 0;
        this.countYellow = 0;
        this.selectedBalls.blueBalls = [];
        this.selectedBalls.yellowBalls = [];
        this.min = '';
    }
}