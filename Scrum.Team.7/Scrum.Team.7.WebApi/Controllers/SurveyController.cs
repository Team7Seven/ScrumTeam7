﻿using System;
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

        public Survey[] Get()
        {
            return _surveyRepository.GetAllSurveys();
        }
    }
}
