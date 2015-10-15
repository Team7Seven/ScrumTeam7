(function () {
    'use strict';
    var controllerId = 'createpreview';
    angular.module('app').controller(controllerId, ['common', 'datacontext', createpreview]);

    function createpreview(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.news = {
            title: 'Meeting Minder createpreview',
            description: 'Meeting Minder SPA template for Angular developers.'
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'createpreview';

        activate();

        function activate() {
            common.activateController(controllerId)
                .then(function () { log('Activated Preview Survey View'); });
        }
    }
})();