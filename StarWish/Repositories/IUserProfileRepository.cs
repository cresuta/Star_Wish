using StarWish.Models;

namespace StarWish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        UserProfile GetByEmail(string email);
    }
}