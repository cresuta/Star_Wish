using StarWish.Models;

namespace StarWish.Repositories
{
    public interface IUserProfileRepository
    {
        UserProfile GetByEmail(string email);
    }
}