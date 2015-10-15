(function () {
    'use strict';
    var controllerId = 'answers';
    angular.module('app').controller(controllerId, ['common', 'datacontext', answers]);

    function answers(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        
        vm.answerList = []; 
        vm.answersFormats = ['Drop Down List','Radio Button','Free Text Box'];

        vm.news = {
            title: 'Survey Builder - Answers',
            description: 'Build your survey by adding answers.'
        };

        vm.title = 'Answers';

        activate();

        function activate() {
            common.activateController(controllerId)
                .then(function() { log('Activated Answers View'); });
        }

        vm.answerAdd = function() {
            vm.answerList.push({answerText:vm.answerText, done:false});
            vm.answerText = "";
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