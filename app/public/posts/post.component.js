(function() {
  'use strict';

  angular
    .module('post.component' , ['ui.router'])

    .component('postMessage' , {
      controller: Controller,
      templateUrl: '/posts/post.template.html'
    });

    Controller.$inject = ['$http'];

    function Controller($http) {
      const vm = this;

      vm.$onInit = onInit;

      function onInit(){
        //write code to get all messages on page load here
        console.log("we made it to onInit");
      }
    }

}());
