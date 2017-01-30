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
    }
}());
