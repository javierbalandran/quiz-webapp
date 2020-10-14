using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        // GET api/questions
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return new Models.Question[] { 
                new Models.Question() { Text = "hello" },
                new Models.Question() { Text = "world" }
            };
        }

        // POST api/questions
        [HttpPost]
        public void Post([FromBody] Models.Question question)
        {

        }
    }
}
