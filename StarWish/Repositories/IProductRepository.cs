using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IProductRepository
    {
        List<Product> GetAll();
        List<Product> GetAllProductsByWishListId(int id);
        Product GetById(int id);
    }
}
