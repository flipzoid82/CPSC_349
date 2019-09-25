(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement = $(selector);
    this.$element = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function(fn) {
    /* eslint-disable-next-line no-console */
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        /* eslint-disable-next-line no-console */
        console.log(item.name + ' is ' + item.value);
      });
      /* eslint-disable-next-line no-console */
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.submitPaymentHandler = function(fn) {
    /* eslint-disable-next-line no-console */
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        /* eslint-disable-next-line no-console */
        console.log(item.name + ' is ' + item.value);
      });
      /* eslint-disable-next-line no-console */
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };

  FormHandler.prototype.addRow = function(paymentData) {
    var rowElement = new Row(paymentData);
    this.$element.append(rowElement.$element);
  };

  function Row(paymentData) {
    var $div = $('<div></div>', {
      'id': 'ex1',
      'data-payment-thank-you': 'modal',
      'class': 'modal'
    });
    
    var $label = $('<label></label>');

    var $p = $('<p></p>', {
    });

    var description = 'Thank you for your payment, ';

    description += paymentData.title;
    description += ' ' + paymentData.username;
    description += '!';

    $label.append($p);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  App.FormHandler = FormHandler;
  window.App = App;
})(window);
