(function() {
    'use strict'; 
    angular.module('app').directive('radioControl', radioControl);

    function setTemplate(){
        var template = "<div ng-repeat></div>";

        return template;
    }
    function radioControl($parse) {



        var hostObject = {
            //template: setTemplate(),
            templateUrl: "/app/takeSurvey/radioTemplate.html",
            restrict: 'A',
            transclude: true,
            replace: true,
            scope: {
                onSelect : "=",
                questionId: "="
            },
            link: function(scope, element, attrs) {
                scope.bound = { answerValue: null };
                
                var attrModel = $parse(attrs.radioControl);
                var repo = attrModel(scope.$parent);
                
                //if(!repo && !scope.questionId) return;
                //scope.questionId
                var radioAnswers = [];
                for(var i=0, len=repo.answers.length; i<len; i++){
                    var answer = repo.answers[i];
                    if(answer.QuestionID == scope.questionId)
                        radioAnswers.push(answer);
                }
                scope.radioAnswers = radioAnswers;
                //scope.onSelectBubble = function(answerId, value){
                //    //var fn = $parse(attrs.onSelect);
                //    //var repo = attrModel(scope.$parent);
                //    //fn(scope, { answerId: answerId, value: value });
                //    scope.onSelect({ answerId: answerId, value: value });
                //};
            }
        };
        return hostObject;
    }


})();