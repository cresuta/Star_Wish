using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IProductRepository
    {
        void Add(Product product);
        void Delete(int id);
        List<Product> GetAll();
        List<Product> GetAllProductsByWishListId(int id);
        Product GetById(int id);
        void Update(int id, int qty);
    }
}
