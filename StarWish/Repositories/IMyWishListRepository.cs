using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IMyWishListRepository
    {
        void Add(MyWishList myWishList);
        List<MyWishList> GetAllWishListsByUserProfileId(int id);
        MyWishList GetById(int id);
    }
}