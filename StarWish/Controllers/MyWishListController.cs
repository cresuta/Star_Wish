using Microsoft.AspNetCore.Mvc;
using StarWish.Models;
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

        // GET: api/<MyWishListController> , return wish lists that are linked to the user
        [HttpGet("mywishlists")]
        public IActionResult GetAllWishListsForUserProfile(int userProfileId)
        {
            return Ok(_myWishListRepository.GetAllWishListsByUserProfileId(userProfileId));
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
        public IActionResult Post(MyWishList myWishList)
        {
            _myWishListRepository.Add(myWishList);
            // return CreatedAtAction("Get", new { id = myWishList.Id }, myWishList);
            return Ok(_myWishListRepository.GetById(myWishList.Id));
        }

        // DELETE api/<MyWishListController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _myWishListRepository.Delete(id);
            return NoContent();
        }

        // PATCH api/<MyWishListController>/5
        [HttpPatch("{id}")]
        public IActionResult Patch(int id, MyWishList myWishList)
        {
            if (id != myWishList.Id)
            {
                return BadRequest();
            }

            _myWishListRepository.Update(myWishList);
            return NoContent();
        }


    }
}
