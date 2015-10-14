using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Scrum.Team._7.WebApi.Models;

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

        public Survey[] GetAllSurveys()
        {
            //TODO - This will hook up to the Entity Framework data access layer to return data from the db instead of a hard coded
            var ctx = HttpContext.Current;

            if (ctx != null)
            {
                return (Survey[])ctx.Cache[CacheKey];
            }

            return new Survey[]
            {
                new Survey
                {
                    Id = 0,
                    Name = "Placeholder"
                }
            };
        }
    }
}