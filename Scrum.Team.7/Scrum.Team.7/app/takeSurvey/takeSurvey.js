(function () {
    'use strict';
    var controllerId = 'takeSurvey';
    angular.module('app').controller(controllerId, ['common', 'takeSurveySrv', takeSurvey]);

    function takeSurvey(common, takeSurveySrv) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Take survey';

        activate();

        vm.repo = takeSurveySrv.getQuestions();

        

        vm.questionSelected = function(answerId, questionId){
            log('Changed: ' + answerId + ':' + questionId || '');
            //check if response exists, if it does, remove it
            takeSurveySrv.questionSelected(answerId, questionId);
        }

        //log(vm.questions);
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Taking survey...'); });
        }
    }
})();