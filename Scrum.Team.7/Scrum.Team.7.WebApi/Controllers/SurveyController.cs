using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Scrum.Team._7.WebApi.Models;
using Scrum.Team._7.WebApi.Services;

namespace Scrum.Team._7.WebApi.Controllers
{
    public class SurveyController : ApiController
    {
        private SurveyRepository _surveyRepository;

        public SurveyController()
        {
            this._surveyRepository = new SurveyRepository();
        }

        public List<SurveryEF.Survey> Get()
        {
            return _surveyRepository.GetAllSurveys();
        }

        [HttpPost]
        public bool Post(string stuff)
        {
            _surveyRepository.SaveSurvey(stuff);
            return true;
        }
    }
}
