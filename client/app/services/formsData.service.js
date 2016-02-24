class BuildsheetDataService {
  constructor ($http) {
    'ngInject';
    this.getItem = function (mid) {
      return $http.get('/api/buildsheet/?mid=' + mid).then(function(result) {
           return result.data;
       });
    };

    this.approve_form = function (finst) {
      return $http.put('/api/buildsheet/approve', { finst: finst})
        .then(function successCallback(response) {
          return response.data;
        }, function errorCallback (response) {
          return response;
      });
    };

    this.reject_form = function(finst, note) {
      return $http.put('/api/buildsheet/reject', { finst: finst, note: note})
        .then(function successCallback(response) {
          return response.data;
        }, function errorCallback (response) {
          return response;
      });
    };

    this.reopen_form = function(finst) {
      return $http.put('/api/buildsheet/reopen', { finst: finst})
        .then(function successCallback(response) {
          return response.data;
        }, function errorCallback (response) {
          return response;
      });
    };

    this.submit_loadbalance_key = function(finst, licenseKey) {
      return $http.put('/api/buildsheet/loadbalanceKey', { finst: finst, key: licenseKey})
        .then(function successCallback(response) {
          return response.data;
        }, function errorCallback (response) {
          return response.data;
      });
    };
  }

  getData(mid) {
    return this.getItem(mid);
  }

  approveForm(finst) {
    return this.approve_form(finst);
  }

  rejectForm(finst, note) {
    return this.reject_form(finst, note);
  }

  reopenForm (finst) {
    return this.reopen_form(finst);
  }

  submitLoadBalKey  (finst, licenseKey) {
    return this.submit_loadbalance_key(finst, licenseKey);
  }
}

export default BuildsheetDataService;