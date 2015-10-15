(function () {
    'use strict';    
    angular.module('app').factory('takeSurveySrv', ['common', takeSurveySrv]);

    function takeSurveySrv(common, $resource){
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn();
        var surveyNo = 0;
        var questions = [];
        var answers = [];
        var responses = [];
        var mockQuestions = [{   QuestionID: 1, 
                            QuestionText: 'Rate how you feel about this statement: "Team 7 is the greatest"', 
                            QuestionType: "radio"},
                        {   QuestionID: 2, 
                            QuestionText: 'What is your favourite soup from the choices below?', 
                            QuestionType: "ddl"},
                        {   QuestionID: 3, 
                            QuestionText: 'Tell us what you thought of this great survey', 
                            QuestionType: "freetext"},
                        {   QuestionID: 4, 
                            QuestionText: 'How much do you like hackathons?',
                            QuestionType: "radio"},
                        {   QuestionID: 5, 
                            QuestionText: 'Best hackathon team?',
                            QuestionType: "ddl"},
                        {   QuestionID: 6, 
                            QuestionText: 'What time did you go to sleep at last night?',
                            QuestionType: "radio"},
                        {   QuestionID: 7, 
                            QuestionText: 'Computer says?',
                            QuestionType: "radio"},
                        {   QuestionID: 8, 
                            QuestionText: 'Favourite season?',
                            QuestionType: "ddl"}
                            ];
        
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
                            { AnswerID: 11, QuestionID: 3, AnswerText: "But seriously:" },
                            
                            { AnswerID: 12, QuestionID: 4, AnswerText: "Loads" },
                            { AnswerID: 13, QuestionID: 4, AnswerText: "Just a lot" },

                            { AnswerID: 14, QuestionID: 5, AnswerText: "Pink" },
                            { AnswerID: 15, QuestionID: 5, AnswerText: "Green" },
                            { AnswerID: 16, QuestionID: 5, AnswerText: "WHITE!!" },
                            { AnswerID: 17, QuestionID: 5, AnswerText: "blue" },
                            { AnswerID: 18, QuestionID: 5, AnswerText: "orange" },

                            { AnswerID: 19, QuestionID: 6, AnswerText: "7.30pm" },
                            { AnswerID: 20, QuestionID: 6, AnswerText: "10 pm" },
                            { AnswerID: 21, QuestionID: 6, AnswerText: "2 am" },
                            { AnswerID: 22, QuestionID: 6, AnswerText: "4 in the morning" },

                            { AnswerID: 23, QuestionID: 7, AnswerText: "Yes" },
                            { AnswerID: 24, QuestionID: 7, AnswerText: "No" },

                            { AnswerID: 25, QuestionID: 8, AnswerText: "Spring" },
                            { AnswerID: 26, QuestionID: 8, AnswerText: "Summer" },
                            { AnswerID: 27, QuestionID: 8, AnswerText: "Autumn" },
                            { AnswerID: 28, QuestionID: 8, AnswerText: "Winter" },
                            ];

        var publicObject = {
            getQuestions: function(){
                //log('Gor questions from service leek: ' + mockQuestions.length);
                return {questions: mockQuestions, answers: mockAnswers };
            },
            setSurveyNo: function(number) {
                surveyNo = number;
            },
            questionSelected: function(answerId, questionId){
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
        };
        return publicObject;
    }

})();