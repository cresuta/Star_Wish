using Microsoft.Extensions.Configuration;
using StarWish.Models;
using StarWish.Utils;

namespace StarWish.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public UserProfile GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, up.FirstName, up.LastName, up.DisplayName, 
                               up.Email, up.CreateDateTime, up.ProfileImage

                          FROM UserProfile AS up       
                         WHERE Email = @email";

                    DbUtils.AddParameter(cmd, "@email", email);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            DisplayName = DbUtils.GetString(reader, "DisplayName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            ProfileImage = DbUtils.GetString(reader, "ProfileImage")
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }
    }
}
