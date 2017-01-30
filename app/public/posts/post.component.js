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
      vm.classifieds = [];

      function onInit(){
        // console.log("we made it to onInit");
        $http.get('/api/classifieds')

          .then(results => {
            vm.classifieds = results.data;
            console.log(results.data);
          });
      }
    }

}());
