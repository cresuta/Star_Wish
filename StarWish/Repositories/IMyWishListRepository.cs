using StarWish.Models;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public interface IMyWishListRepository
    {
        void Add(MyWishList myWishList);
        void Delete(int id);
        List<MyWishList> GetAllWishListsByUserProfileId(int id);
        MyWishList GetById(int id);
        void Update(MyWishList myWishList);
    }
}