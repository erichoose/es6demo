import navbarTemplate from './navbar.html';

class NavbarDirective {
  constructor () {
    'ngInject';

    let directive = {
      restrict: 'E',
      template: navbarTemplate,
      scope: {
          name: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
}

class NavbarController {
  constructor () {
    'ngInject';
  }
}

export default NavbarDirective;
