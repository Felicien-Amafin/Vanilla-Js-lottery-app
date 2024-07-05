import { BrowserStorage } from './Data/browserStorage';
import { createGenericContainer, createSpecificContainer } from './helpers';

export class SearchTool {
    constructor(title, feedback) {
        this.feedback = feedback;
        this.title = title;
        this.mainContainer;
        this.display(this.title);
    }
    display(title) {
        const mainContainer = createGenericContainer(
            'search-tool', 
            `${title}`, 
            'blue-banner--med'
        );
        this.mainContainer = mainContainer;
        const speContainer = createSpecificContainer(mainContainer, ['search-form'], 'form');
        this.addContent(speContainer);
        this.addEventListeners(speContainer);
    }
    addContent(parentNode) {
        parentNode.innerHTML = `
        <p class="search-form__instruction">Select your ball color, then enter it's number.</p>
        <div id="search-form__checkboxes" class="search-form__checkboxes">
            <div class="checkbox">
                <label for="blue-b" class="blue-b" name="ball-color" >Blue ball</label>
                <input id="blue-b" type="radio" name="ball-color" checked>
            </div>
            <div class="checkbox">
                <label for="yellow-b" class="yellow-b" name="ball-color" >Yellow ball</label>
                <input id="yellow-b" type="radio" name="ball-color" >
            </div>
        </div>
        <div class="search-form__input">
            <label for="num-input">Enter number:</label>
            <input id="num-input" class="num-input" type="number" name="num-input">
        </div>
        <p class="search-form__error-mess none">Enter valid number!</p>
        <button id="search-form__btn" class="btn btn--disabled" type="button">Search</button>
        `
    }
    addEventListeners(parentNode) {
        this.addInputEvListener(parentNode);
        this.addBtnEvListner(parentNode);
    }
    addInputEvListener(parentNode) {
        parentNode.querySelector('#num-input').addEventListener('input', ()=> {
            const btn = parentNode.querySelector('#search-form__btn');
            if(parentNode.querySelector('#num-input').value !== '') {
                btn.classList.remove('btn--disabled');
                btn.classList.add('btn--enabled');
                btn.disabled = false;
            } else {
                btn.classList.remove('btn--enabled');
                btn.classList.add('btn--disabled');
                btn.disabled = true;
                if(!document.querySelector('.search-form__error-mess').classList.contains('none')) {
                    // Remove error Mess if it has been displayed previously
                    this.hideErrorMess();
                }
            }
        })
    }
    addBtnEvListner(parentNode) {
        parentNode.querySelector('#search-form__btn').addEventListener('click', ()=> {
            if(!document.querySelector('.search-form__error-mess').classList.contains('none')) {
                // Remove error Mess if it has been displayed previously
                this.hideErrorMess();
            }
            const input = parentNode.querySelector('#num-input');
            if(input.value !== '') {
                const searchInfo = this.checkUserInput(this.getUserInput());
                if(searchInfo) {
                    BrowserStorage.saveUserInfo('searchInfo', searchInfo);
                    document.querySelector('.overlay').remove(); // remove searchTool
                    this.feedback.display(BrowserStorage.getUserInfo('searchInfo'))
                } else {
                    this.showErrorMess();
                }
            }
        });
    }
    getUserInput() {
        const checkBoxes = document.querySelector('#search-form__checkboxes');
        const list = checkBoxes.querySelectorAll('input');
        const obj = {
            checked: '',
            numInput: '',
        }
        list.forEach((box)=> {
            box.checked === true ? (obj.checked = box.id): null;
        })
        obj.numInput = parseInt(document.getElementById('num-input').value);
        return obj;
    }
    checkUserInput(obj) {
        if(obj.checked === 'blue-b') {
            if((obj.numInput >= 1) && (obj.numInput <= 50)) {
                return obj;
            }
        } else if(obj.checked === 'yellow-b') {
            if((obj.numInput >= 1) && (obj.numInput <= 12)) {
                return obj;
            }
        }
    }
    hideErrorMess() {
        document.querySelector('.search-form__error-mess').classList.add('none');
    }
    showErrorMess() {
        document.querySelector('.search-form__error-mess').classList.remove('none');
    }
}