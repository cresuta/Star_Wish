using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IProductRepository
    {
        List<Product> GetAll();
        Product GetById(int id);
    }
}
