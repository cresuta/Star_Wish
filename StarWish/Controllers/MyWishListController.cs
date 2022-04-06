using Microsoft.AspNetCore.Mvc;
using StarWish.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StarWish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyWishListController : ControllerBase
    {

        private readonly IMyWishListRepository _myWishListRepository;
        public MyWishListController(IMyWishListRepository myWishListRepository)
        {
            _myWishListRepository = myWishListRepository;
        }

        // GET: api/<MyWishListController>
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_myWishListRepository.GetAll());
        }

        // GET api/<MyWishListController>/5
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var myWishList = _myWishListRepository.GetById(id);
            if (myWishList == null)
            {
                return NotFound();
            }
            return Ok(myWishList);

        }

        // POST api/<MyWishListController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<MyWishListController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<MyWishListController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
