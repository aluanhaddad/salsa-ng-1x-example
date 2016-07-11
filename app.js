(function () {
    'use strict';

    angular
        .module('app')
        .controller('TestController', TestController);

    TestController.$inject = ['$q', '$http', '$timeout'];
    /**
     * @param {ng.IQService} $q
     * @param {ng.IHttpService} $http
     * @param {ng.ITimeoutService} $timeout
     */
    function TestController($q, $http, $timeout) {
        $timeout(() => $q.resolve('test'));
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
