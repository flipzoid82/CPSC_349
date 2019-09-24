(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function PaymentFormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  PaymentFormHandler.prototype.submitHandler = function() {
    console.log('Setting submit handler for form');
    // More code will go here
  };

  App.PaymentFormHandler = PaymentFormHandler;
  window.App = App;
})(window);
