using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SurveryEF;
using Survey = Scrum.Team._7.WebApi.Models.Survey;

namespace Scrum.Team._7.WebApi.Services
{
    public class SurveyRepository
    {
        private const string CacheKey = "SurveyStore";

        public SurveyRepository()
        {
            var ctx = HttpContext.Current;

            if (ctx != null)
            {
                if (ctx.Cache[CacheKey] == null)
                {
                    var surveys = new[]
                    {
                        new Survey
                        {
                            Id = 1, Name = "Survey Stuff"
                        },
                        new Survey
                        {
                            Id = 2, Name = "Another Survey"
                        }
                    };

                    ctx.Cache[CacheKey] = surveys;
                }
            }
        }

        public List<SurveryEF.Survey> GetAllSurveys()
        {
            using (var dbContext = new NICS_SurveyEntities1())
            {
                var surveys = dbContext.Surveys;
                List<SurveryEF.Survey> s = new List<SurveryEF.Survey>(surveys);
                return s;
            }
        }

        public SurveryEF.Survey GetSurveyById(int surveyId)
        {
            using (var dbContext = new NICS_SurveyEntities1())
            {

                var query = from p in dbContext.Surveys
                            where p.SurveyID == surveyId
                            select p;

                return query.SingleOrDefault();
            }
        }
    }
}