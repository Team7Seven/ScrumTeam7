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
    public class AnswerController : ApiController
    {
        private AnswerRepository _answerRepository;

        public AnswerController()
        {
            this._answerRepository = new AnswerRepository();
        }

        public HttpResponseMessage Post(Answer answer)
        {
            this._answerRepository.SaveAnswer(answer);

            var response = Request.CreateResponse<Answer>(System.Net.HttpStatusCode.Created, answer);

            return response;
        }
    }
}
