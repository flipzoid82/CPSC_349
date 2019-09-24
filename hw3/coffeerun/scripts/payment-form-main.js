(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-payment="form"]';
  var App = window.App;
  var PaymentFormHandler = App.PaymentFormHandler;

  var paymentFormHandler = new PaymentFormHandler(FORM_SELECTOR);

  paymentFormHandler.submitHandler();
  console.log(paymentFormHandler);
})(window);
