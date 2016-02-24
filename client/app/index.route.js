function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {
  'ngInject';
  $urlMatcherFactoryProvider.strictMode(false);
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('dashboard', {
      abstract: true,
      url: '/dashboard',
      templateUrl: 'client/app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('dashboard.customerview', {
      url: '/forms/:masterOrderID',
      templateUrl: 'client/app/core/customerview/customerview.html',
      controller: 'customerviewController',
      controllerAs: 'cv'
    })
    .state('dashboard.forms.form', {
        url: '/form/:finst',
        template: '<ui-form data="bs.formbookInfo"/>'
    })
    .state('dashboard.forms-designer', {
        url: '/forms-designer',
        templateUrl: 'client/app/core/forms-designer/forms-designer.html',
        controller: 'formsDesignerController',
        controllerAs: 'bsd'
    })
    .state('dashboard.forms-designer.form', {
        url: '/form/:formid',
        templateUrl: 'client/app/core/forms-designer/forms-designer.main.html'
    });

}

export default routerConfig;
