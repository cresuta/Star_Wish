using Microsoft.AspNetCore.Mvc;
using StarWish.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StarWish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository; 
        }
        // GET: api/<ProductController>
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_productRepository.GetAll());
        }

        // GET api/<ProductController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _productRepository.GetById(id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        // This will return all products associated with the id of the given my wish list
        [HttpGet("mywishlistproducts")]
        public IActionResult GetAllProductsForWishListId(int id)
        {
            return Ok(_productRepository.GetAllProductsByWishListId(id));
        }

        // POST api/<ProductController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProductController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProductController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
