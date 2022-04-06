using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IMyWishListRepository
    {
        List<MyWishList> GetAllWishListsByUserProfileId(int id);
        MyWishList GetById(int id);
    }
}