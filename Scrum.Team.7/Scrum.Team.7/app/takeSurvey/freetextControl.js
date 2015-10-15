(function() {
    'use strict'; 
    angular.module('app').directive('freetextControl', freetextControl);

    function setTemplate(){
        var template = "<div ng-repeat></div>";

        return template;
    }
    function freetextControl($parse) {



        var hostObject = {
            //template: setTemplate(),
            templateUrl: "/app/takeSurvey/freetextTemplate.html",
            restrict: 'A',
            transclude: true,
            replace: true,
            scope: {
                onSelect : "=",
                questionId: "="
            },
            link: function(scope, element, attrs) {
                var attrModel = $parse(attrs.freetextControl);
                var repo = attrModel(scope.$parent);
                                
                var answers = [];
                for(var i=0, len=repo.answers.length; i<len; i++){
                    var answer = repo.answers[i];
                    if(answer.QuestionID == scope.questionId)
                        answers.push(answer);
                }
                scope.answers = answers;
            }
        };
        return hostObject;
    }


})();