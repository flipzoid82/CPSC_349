(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-payment="form"]';
  var App = window.App;
  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.submitPaymentHandler(function(data){
    formHandler.addRow(data);
  });

  console.log(formHandler);
})(window);
