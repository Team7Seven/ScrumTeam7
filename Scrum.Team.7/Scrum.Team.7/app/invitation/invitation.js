(function () {
    'use strict';
    var controllerId = 'createinvitations';
    angular.module('app').controller(controllerId, ['common', createinvitations]);

    function createinvitations(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'createinvitations';

        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated Create Invitations View'); });
        }

        vm.invitationAdd = function(){
            log('Created some invitations.');
        };
}
})();