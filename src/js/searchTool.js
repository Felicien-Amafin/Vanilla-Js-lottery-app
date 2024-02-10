import { createGenericContainer, createSpecificContainer } from './helpers';

export class SearchTool {
    constructor() {
        this.display();
    }
    display() {
        const mainContainer = createGenericContainer(
            'search-tool', 
            'Find your favorite number best(s) friend(s)', 
            'blue-banner--med'
        );
        const speContainer = createSpecificContainer(mainContainer, ['search-form'], 'form');
        this.addContent(speContainer);
    }
    addContent(parentNode) {
        parentNode.innerHTML = `
        <p class="search-form__instruction">Select your ball color, then enter it's number.</p>
        <div id="search-form__checkboxes" class="search-form__checkboxes">
            <div class="checkbox">
                <label for="blue-b" class="blue-b" name="ball-color" >Blue ball</label>
                <input id="blue-b" type="radio" name="ball-color">
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
        <button id="search-form__btn" class="btn" type="button">Search</button>
        `
    }
}