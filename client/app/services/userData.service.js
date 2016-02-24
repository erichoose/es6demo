class UserDataService {
  constructor ($http) {
    'ngInject';
    this.getUserInformation = function () {
      return $http.get('/api/user').then(function(result) {
           return result.data;
       });
    };
  }

  getUserData() {
    return this.getUserInformation();
  }

}

export default UserDataService;