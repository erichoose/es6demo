class BuildsheetDesignerDataService {
  constructor ($http) {
    'ngInject';
    this.getFormInformation = function () {
      return $http.get('/api/buildsheet/forms').then(function(result) {
           return result.data;
       });
    };
  }

  getFormsData() {
    return this.getFormInformation();
  }

}

export default BuildsheetDesignerDataService;