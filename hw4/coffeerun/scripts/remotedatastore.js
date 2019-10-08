(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var CheckList = App.CheckList;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var ID;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      /* eslint-disable-next-line no-console */
      console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function() {
    $.get(this.serverUrl, function(serverResponse) {
      /* eslint-disable-next-line no-console */
      console.log(serverResponse);
      serverResponse.forEach(function(response){
        checkList.addRow.call(checkList, response);
      });
      //cb(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + '?emailAddress=' + key, function(serverResponse) {
      /* eslint-disable-next-line no-console */
      //console.log(serverResponse);
      //var obj = JSON.stringify(serverResponse);
      ID = serverResponse[0].id;
      //console.log('test');
      console.log(ID);
    });
  };

var remoteDS = new RemoteDataStore('http://localhost:2403/coffeeorders');

  RemoteDataStore.prototype.remove = function(key) {
    remoteDS.get(key);
    console.log('remove test');
    console.log(ID);
    $.ajax(this.serverUrl + '/' + ID, {
      type: 'DELETE'
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
