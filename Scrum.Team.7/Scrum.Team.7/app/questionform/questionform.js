(function () {
    'use strict';
    var controllerId = 'question';
    angular.module('app').controller(controllerId, ['common', 'datacontext', question]);

    function question(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        
        vm.questionList = []; 
        vm.questionFormats = ['Drop Down List','Radio Button','Free Text Box'];

        vm.news = {
            title: 'Survey Builder - Questions',
            description: 'Build your survey by adding questions, answer frameworks and navigation'
        };

        vm.title = 'Questions';

        activate();

        function activate() {
            common.activateController(controllerId)
                .then(function() { log('Activated Question View'); });
        }

        vm.questionAdd = function() {
            vm.questionList.push({questionText:vm.questionInput, questionType:vm.questionType, done:false});
            vm.questionInput = "";
            vm.questionType = "";
        };

        vm.remove = function() {
            var oldList = vm.questionList;
            vm.questionList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) vm.questionList.push(x);
            });
        };

    }
})();