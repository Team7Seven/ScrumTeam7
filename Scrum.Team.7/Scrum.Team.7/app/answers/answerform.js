(function () {
    'use strict';
    var controllerId = 'answers';
    angular.module('app').controller(controllerId, ['common', 'datacontext', answers]);

    function answers(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        
        vm.answersList = []; 
        vm.answersFormats = ['Drop Down List','Radio Button','Free Text Box'];

        vm.news = {
            title: 'Survey Builder - Answers',
            description: 'Build your survey by adding answers.'
        };

        vm.title = 'Questions';

        activate();

        function activate() {
            common.activateController(controllerId)
                .then(function() { log('Activated Answers View'); });
        }

        vm.answersAdd = function() {
            vm.answersList.push({answersText:vm.answersInput, answersType:vm.answersType, done:false});
            vm.answersInput = "";
            vm.answersType = "";
        };

        vm.remove = function() {
            var oldList = vm.answersList;
            vm.answersList = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) vm.answersList.push(x);
            });
        };

    }
})();