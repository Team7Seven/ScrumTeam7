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

        var responses = [];

        vm.questionSelected = function(answerId, questionId){
            log('Changed: ' + answerId + ':' + questionId || '');
            //check if response exists, if it does, remove it
            var response = { AnswerID: answerId, QuestionID: questionId};
            
            var isReplaced = false;
            //push the response to the array; if question has already been answered, overwrite it
            for(var i=0, len=responses.length; i<len; i++){
                if(responses[i].QuestionID == questionId){
                    responses[i] = response;
                    isReplaced = true;
                    break;
                }
            }
            isReplaced || responses.push(response);
        }

        //log(vm.questions);
        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Taking survey...'); });
        }
    }
})();