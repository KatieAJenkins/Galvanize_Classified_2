(function() {
  'use strict';

  angular
    .module('post.component' , [])

    .component('postMessage' , {
      controller: Controller,
      templateUrl: '/posts/post.template.html'
    });

    function Controller() {
      const vm = this;

      vm.$onInit = onInit;

      function onInit(){
        //write code to get all messages on page load here
      }
    }

}());
