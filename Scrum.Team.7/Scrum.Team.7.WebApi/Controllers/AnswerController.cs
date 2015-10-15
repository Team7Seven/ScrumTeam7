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
        private readonly AnswerRepository _answerRepository;

        public AnswerController()
        {
            this._answerRepository = new AnswerRepository();
        }

        public HttpResponseMessage Post(List<Answer> answer)
        {
            HttpResponseMessage response = null;

            foreach (var ans in answer)
            {
                _answerRepository.SaveAnswer(ans);
                response = Request.CreateResponse<Answer>(System.Net.HttpStatusCode.Created, ans);
            }

            return response;
        }
    }
}
