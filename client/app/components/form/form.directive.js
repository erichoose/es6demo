import formTemplate from './form.html';

class FormDirective {
  constructor (BuildsheetData ) {
    'ngInject';

    const directive = {
      restrict: 'E',
      template: formTemplate,
      scope: {
          data: '='
      },
      controller: FormController,
      controllerAs: 'forms',
      bindToController: true
    };

    return directive;
  }
}

class FormController {
  constructor ($stateParams, buildsheetData ) {
    'ngInject';
    this.buildsheetData = buildsheetData;
    this.submitted = this.data.formBookStatus;
    this.bIsPortalForm = this.data.bIsPortalForm;
    this.notes = this.data.notes;
    this.formy = this.findByID(this.data.forms, $stateParams.finst);
  }


  convertDate(stringDate) {
    return new Date(stringDate);
  }

  findByID(forms, id) {
    for (let i = 0; i < forms.length; i++) {
      if (forms[i].finst == id) return forms[i];
    }
    return null;
  }

  approveForm(finst) {
    const vm = this;
    swal({
        title: "Are you sure?",
        text: "You will not be able to rejudge this form unless the form is resubmitted by the customer.",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, approve it!",
        showLoaderOnConfirm: true,
        closeOnConfirm: false
    }, function() {
        vm.buildsheetData.approveForm(finst).then(function(data) {
          vm.formy.approved = '1';
          vm.formy.judgedBy = data.username;
          vm.formy.date_judged = data.dateJudged;
         swal("Approved!", "This form has been approved", "success");
        });        
    });
  }

  rejectForm(finst) {
    const vm = this;
    swal({   
        title: "Reject Form",   
        text: "Reason",   
        type: "input",
        inputType: "textarea",
        textareaRows: "5",
        showCancelButton: true, 
        confirmButtonColor: "#f06e57",   
        animation: "slide-from-top", 
        inputPlaceholder: "Please indicate rejection reason" ,
        closeOnConfirm: false,
        showLoaderOnConfirm: true 
      },
      function(inputValue){  
        if (inputValue === false) return false;
        if (inputValue === "") {     
          swal.showInputError("Please indicate why you are rejecting this form");     
          return false;   
        }
        vm.buildsheetData.rejectForm(finst, inputValue).then(function(data) {
          vm.formy.approved = '0';
          vm.formy.judgedBy = data.username;
          vm.formy.date_judged = data.dateJudged;
          const notes = {
            "Customer": data.username,
            "Date": data.dateJudged,
            "Form": 'Rejected Form', 
            "Note Text": inputValue
          };
          vm.notes.push(notes);
         swal("Rejected!", "This form has successfully been rejected", "success");
        }); 
      });
  }

  reopenForm (finst) {
    const vm = this;
    swal({
        title: "Reopen this module?",
        text: "Note: This is not simply undoing an approval of this module. Reopening this module will allow the customer to edit the information that they have already submitted. They will then have to resubmit the form. Are you sure you want to reopen this module?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, reopen",
        showLoaderOnConfirm: true,
        closeOnConfirm: false
    }, function() {
        vm.buildsheetData.reopenForm(finst).then(function(data) {
          vm.formy.approved = null;
          vm.formy.judgedBy = null;
          vm.formy.date_judged = null;
          vm.formy.date_submitted = null;
           swal("Reopened", "This form has been reopened", "success");
        });        
    });
  }

  expandAll ( ) {
    this.formy.formdata.table.forEach(function(element, index, array) {
      element.expanded = true;
    });
  }

  collapseAll () {
    this.formy.formdata.table.forEach(function(element, index, array) {
      element.expanded = false;
    });
  }

  showColumn (field) {
    if (field.bIsVisible != null) {
      return "field.bIsVisible === '1'";
    }

  }

  getColumnSize (data) {
    let counter = 1;
    for (var i = 0; i < data.length; i++) {
      if (data[i].bIsVisible === '1') {
        counter += 1;
      }
    };
    return counter;
  }

  toggleColumn (value) {
    
    for (var i = 0; i < 1; i++) {
     // Things[i]
    };
  }

  submitLoadBalKey (finst) {
    const vm = this;
    vm.buildsheetData.submitLoadBalKey(finst, vm.licensekey).then(function(data) {
      
    }); 
  }

}

FormController.$inject = ['$stateParams', 'buildsheetData'];
export default FormDirective;