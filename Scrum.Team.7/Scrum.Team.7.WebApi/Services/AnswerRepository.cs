using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web;
using Scrum.Team._7.WebApi.Models;

namespace Scrum.Team._7.WebApi.Services
{
    public class AnswerRepository
    {
        private const string CacheKey = "SurveyStore";

        public bool SaveAnswer(Answer answer)
        {
            var ctx = HttpContext.Current;

            if (ctx != null)
            {
                try
                {
                    var currentData = ((Answer[])ctx.Cache[CacheKey]).ToList();
                    currentData.Add(answer);
                    ctx.Cache[CacheKey] = currentData.ToArray();

                    return true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return false;
                }
            }

            return false;
        }
    }
}