(function () {
  'use strict';

    angular
      .module('updatePost.component' , ['ui.router'])

      .component('updatePost' , {
        controller: Controller,
        templateUrl: '/posts/updatePost.template.html'
      });

      Controller.$inject = ['$http', '$stateParams', "$state"];

      function Controller($http, $stateParams, $state) {
        const vm = this;

        vm.$onInit = onInit;
        vm.classifieds = [];
        vm.updatePost = updatePost;


      function onInit(){
        // console.log("connected to update Post component");
        $http.get('/api/classifieds')

          .then(results => {
            vm.classifieds = results.data;
            console.log(results.data);
          });
      }

      function updatePost(title, description, price, item_image){
        var updatedPost = {title: title, description: description, price: price, item_image: item_image};
        console.log(updatedPost);
      }
    }
}());
