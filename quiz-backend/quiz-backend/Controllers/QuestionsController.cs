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
        // POST api/questions
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }
    }
}
