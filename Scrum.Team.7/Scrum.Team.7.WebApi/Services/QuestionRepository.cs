using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SurveryEF;

namespace Scrum.Team._7.WebApi.Services
{
    public class QuestionRepository
    {
        public List<SurveryEF.Question> GetAllQuestions()
        {
            using (var dbContext = new NICS_SurveyEntities1())
            {
                var questions = dbContext.Questions;
                List<SurveryEF.Question> s = new List<SurveryEF.Question>(questions);
                return s;
            }
        }
    }
}