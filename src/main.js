import './scss/main.scss'
import { Navigation } from './js/navigation';
import { Storage } from './js/Storage';
import { Api } from './js/api';
import { LastResultsList } from './js/lastResultsList';
import { Menu } from './js/menu';


class App {
    static init() {
        Navigation.clickListenerHandler('last-results', 'tools');
        Storage.dataInit(Api.data);
        LastResultsList.display(LastResultsList.thirtyLastDraws);
        Menu.addClickListeners();
    }
}

App.init();