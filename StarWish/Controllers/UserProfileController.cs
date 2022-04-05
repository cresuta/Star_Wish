using Microsoft.AspNetCore.Mvc;
using StarWish.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StarWish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {

        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        // GET: api/<UserProfileController>
        [HttpGet("GetByEmail")]
        public IActionResult GetByEmail(string email)
        {
            var user = _userProfileRepository.GetByEmail(email);
            if (email == null || user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // GET api/<UserProfileController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserProfileController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<UserProfileController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserProfileController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
