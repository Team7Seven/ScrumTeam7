using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SurveryEF;

namespace Scrum.Team._7.WebApi.Services
{
    public class QuestionRepository
    {
        public List<SurveryEF.Answer> GetAllAnswers()
        {
            using (var dbContext = new NICS_SurveyEntities1())
            {
                var answers = dbContext.Answers;
                List<SurveryEF.Answer> s = new List<SurveryEF.Answer>(answers);
                return s;
            }
        }
    }
}