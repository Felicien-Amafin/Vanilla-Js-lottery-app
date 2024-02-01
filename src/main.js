import './scss/main.scss'
import { Navigation } from './js/navigation';
import { Storage } from './js/Storage';
import { Api } from './js/api';
import { LastResultList } from './js/lastResultList';
import { ToolsMenu } from './js/toolsMenu';


class App {
    static init() {
        Navigation.clickListenerHandler('last-results', 'tools');
        Storage.dataInit(Api.data);
        LastResultList.display(LastResultList.fiftyLastDraws);
        ToolsMenu.addClickListeners();
    }
}

App.init();