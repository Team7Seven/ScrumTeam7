using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web;
using SurveryEF;
using Answer = Scrum.Team._7.WebApi.Models.Answer;

namespace Scrum.Team._7.WebApi.Services
{
    public class AnswerRepository
    {
        public bool SaveAnswer(Answer answer)
        {
            var ctx = HttpContext.Current;

            var newAnswers = new SurveryEF.Answer
            {
                AnswerID = 1,
                AnswerText = "Test database insert",
                NextQuestionID = 2,
                QuestionID = 1
            };

            //create DBContext object
            using (var dbContext = new NICS_SurveyEntities1())
            {
                //Add Student object into Students DBset
                dbContext.Answers.Add(newAnswers);

                // call SaveChanges method to save student into database
                dbContext.SaveChanges();
            }

            return true;
        }
    }
}