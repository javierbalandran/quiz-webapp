using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace quiz_backend.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        readonly QuizContext context; 

        public QuestionsController(QuizContext context)
        {
            this.context = context;
        }

        // GET api/questions
        [HttpGet]
        public IEnumerable<Models.Question> Get()
        {
            return context.Questions;
            //return new Models.Question[] { 

            //    new Models.Question() { Text = "hello" },
            //    new Models.Question() { Text = "world" }
            //};
        }

        // POST api/questions
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Question question)
        {
            context.Questions.Add(question);
            await context.SaveChangesAsync();

            return Ok(question);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Question question)
        {
            if(id != question.Id)
            {
                return BadRequest(question);
            }

            context.Entry(question).State = EntityState.Modified;

            await context.SaveChangesAsync();

            return Ok(question);
        }
    }
}
