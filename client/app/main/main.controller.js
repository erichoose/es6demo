class MainController {
  constructor ($timeout, userData, $stateParams, $state) {
    'ngInject';

    const that = this;
    userData.getUserData().then(function(data) {
      
      that.userName = data;
      
    });
    


  }
}

export default MainController;
