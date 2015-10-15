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

        public bool SaveSurvey(string survey)
        {

            var newSurvey = new SurveryEF.Survey
            {
                SurveyID = 23,
                SurveyCreatorID = 1,
                SurveyStartDate = System.DateTime.Now,
                SurveyEndDate = System.DateTime.Now.AddDays(10),
                SurveyTitle = survey,
                SurveyStartSummary = "Welcome to Scrum Team 7",
                SurveyEndSummary = "Thank you for taking Scrum Team 7's awesome survey"
            };

            //create DBContext object
            using (var dbContext = new NICS_SurveyEntities1())
            {
                //Add Student object into Students DBset
                dbContext.Surveys.Add(newSurvey);

                // call SaveChanges method to save student into database
                dbContext.SaveChanges();
            }

            return true;
        }
    }
}