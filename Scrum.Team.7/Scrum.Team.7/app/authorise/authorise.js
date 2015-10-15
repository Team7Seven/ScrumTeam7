(function () {
    'use strict';
    var controllerId = 'authorise';
    angular.module('app').controller(controllerId, ['common', 'datacontext', authorise]);

    function authorise(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;

        vm.title = 'Authorise Surveys';

        activate();

        function activate() {
            common.activateController(controllerId)
                .then(function () { log('Activated Authorise Survey View'); });
        }

    }
})();