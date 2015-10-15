(function() {
    'use strict'; 
    angular.module('app').directive('ddlControl', ddlControl);

    function setTemplate(){
        var template = "<div ng-repeat></div>";

        return template;
    }
    function ddlControl($parse) {



        var hostObject = {
            //template: setTemplate(),
            templateUrl: "/app/takeSurvey/ddlTemplate.html",
            restrict: 'A',
            transclude: true,
            replace: true,
            scope: {
                onSelect : "=",
                questionId: "="
            },
            link: function(scope, element, attrs) {
                var attrModel = $parse(attrs.ddlControl);
                var repo = attrModel(scope.$parent);
                scope.bound = { answerId :null }
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