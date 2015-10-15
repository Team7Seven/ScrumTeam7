using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Scrum.Team._7.WebApi.Services;

namespace Scrum.Team._7.WebApi.Controllers
{
    public class QuestionController : ApiController
    {
        private readonly QuestionRepository _questionRepository;
        
        public QuestionController()
        {
            this._questionRepository = new QuestionRepository();
        }

        public List<SurveryEF.Question> Get()
        {
            return _questionRepository.GetAllQuestions();
        }
    }
}
