using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IMyWishListRepository
    {
        List<MyWishList> GetAll();
    }
}