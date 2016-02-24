import config from './index.config';

import routerConfig from './index.route';
import runBlock from './index.run';
import MainController from './main/main.controller';
import FormsController from './core/forms/forms.controller';
import FormsDesignerController from './core/forms-designer/forms-designer.controller';
import FormsDataService from './services/formsData.service';
import FormsDesignerDataService from './services/formsDesignerData.service';

import UserDataService from './services/userData.service';
import NavbarDirective from './components/navbar/navbar.directive';
import SidebarDirective from './components/sidebar/sidebar.directive';
import CardDirective from './components/card/card.directive';
import FormDirective from './components/form/form.directive';
// import ExpandableTableDirective from '../app/components/expandableTable/expandableTable.directive';

angular.module('forms', ['ngAnimate', 'ngResource', 'ui.router'])
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('formsData', FormsDataService)
  .service('userData', UserDataService)
  .service('formsDesignerData', FormsDesignerDataService)
  .controller('MainController', MainController)
  .controller('FormsController', FormssheetController)
  .controller('FormsDesignerController', FormsDesignerController)
  .directive('uiNavbar', () => new NavbarDirective())
  .directive('wsSidebar', () => new SidebarDirective())
  .directive('uiCard', () => new CardDirective())
  .directive('uiForm', () => new FormDirective())
  .constant('swal', window.sweetalert);