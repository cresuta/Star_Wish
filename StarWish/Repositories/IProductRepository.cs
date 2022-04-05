using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IProductRepository
    {
        void Add(Product product);
        List<Product> GetAll();
        List<Product> GetAllProductsByWishListId(int id);
        Product GetById(int id);
    }
}
