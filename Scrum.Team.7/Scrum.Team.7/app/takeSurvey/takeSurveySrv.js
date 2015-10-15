(function () {
    'use strict';    
    angular.module('app').factory('takeSurveySrv', ['common', takeSurveySrv]);

    function takeSurveySrv(common, $resource){
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn();
        var surveyNo = 0;
        var mockQuestions = [{   QuestionID: 1, 
                            QuestionText: 'Rate how you feel about this statement: "Team 7 is the greatest"', 
                            QuestionType: "radio"},
                        {   QuestionID: 2, 
                            QuestionText: 'What is your favourite soup from the choices below?', 
                            QuestionType: "ddl"},
                        {   QuestionID: 3, 
                            QuestionText: 'Tell us what you thought of this great survey', 
                            QuestionType: "freetext"}];
        
        var mockAnswers = [ { AnswerID: 1, QuestionID: 1, AnswerText: "Strongly Disagree" },
                            { AnswerID: 2, QuestionID: 1, AnswerText: "Disagree" },
                            { AnswerID: 3, QuestionID: 1, AnswerText: "Meh" },
                            { AnswerID: 4, QuestionID: 1, AnswerText: "Agree" },
                            { AnswerID: 5, QuestionID: 1, AnswerText: "Strongly Agree" },

                            { AnswerID: 6, QuestionID: 2, AnswerText: "Vegetable" },
                            { AnswerID: 7, QuestionID: 2, AnswerText: "Miso" },
                            { AnswerID: 8, QuestionID: 2, AnswerText: "Tomato" },
                            { AnswerID: 9, QuestionID: 2, AnswerText: "Eyeball" },

                            { AnswerID: 10, QuestionID: 3, AnswerText: "Lie if you have to:" },
                            { AnswerID: 11, QuestionID: 3, AnswerText: "But seriously:" }]

        var publicObject = {
            getQuestions: function(){
                //log('Gor questions from service leek: ' + mockQuestions.length);
                return {questions: mockQuestions, answers: mockAnswers };
            },
            setSurveyNo: function(number) {
                surveyNo = number;
            },
            selectAnswer: function(questionId, value){
                
            }
        };
        return publicObject;
    }

})();