import './scss/main.scss'
import { Navigation } from './js/navigation';
import { Storage } from './js/Storage';
import { Api } from './js/api';
import { LastResultsList } from './js/lastResultsList';
import { ToolsMenu } from './js/toolsMenu';


class App {
    static init() {
        Navigation.clickListenerHandler('last-results', 'tools');
        Storage.dataInit(Api.data);
        LastResultsList.display(LastResultsList.thirtyLastDraws);
        ToolsMenu.addClickListeners();
    }
}

App.init();