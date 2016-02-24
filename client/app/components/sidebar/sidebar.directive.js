import sidebarTemplate from './sidebar.html';

class SidebarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      template: sidebarTemplate,
      scope: {
          list: '=',
          forms: '='
      },
      controller: SidebarController,
      controllerAs: 'sb',
      bindToController: true
    };

    return directive;
  }
}

class SidebarController {
  constructor () {
    'ngInject';
    this.listy = this.list.menu;
  }
}

export default SidebarDirective;
