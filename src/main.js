import './scss/main.scss'
import { Navigation } from './js/navigation';
import { Draws } from './js/Data/draws';
import { Api } from './js/Data/api';
import { LastResults } from './js/lastResults';
import { Menu } from './js/menu';

class App {
    static init() {
        Navigation.clickListenerHandler('results', 'tools'); // Add click listeners on nav elements
        Draws.initDraws(Api.data);
        LastResults.display(LastResults.lastDraws);
        Menu.addClickListeners();
    }
}

App.init();