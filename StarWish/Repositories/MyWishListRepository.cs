using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using StarWish.Models;
using StarWish.Utils;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public class MyWishListRepository : BaseRepository, IMyWishListRepository
    {
        public MyWishListRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public List<MyWishList> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"         
                       SELECT mwl.Id AS MyWishListId, mwl.Name, mwl.CreateDateTime,
                              mwl.NumberOfProducts, mwl.TotalCost,
                              up.Id AS UserProfileId, up.Email
                         FROM MyWishlist AS mwl
                              LEFT JOIN UserProfile AS up ON mwl.UserProfileId = up.id
                        ORDER BY CreateDateTime DESC";

                    var reader = cmd.ExecuteReader();

                    var mywishlists = new List<MyWishList>();
                    while (reader.Read())
                    {
                        mywishlists.Add(NewWishListFromReader(reader));
                    }

                    reader.Close();

                    return mywishlists;
                }
            }
        }

        private MyWishList NewWishListFromReader(SqlDataReader reader)
        {
            return new MyWishList()
            {
                Id = DbUtils.GetInt(reader, "MyWishListId"),
                Name = DbUtils.GetString(reader, "Name"),
                CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                NumberOfProducts = DbUtils.GetInt(reader, "NumberOfProducts"),
                TotalCost = DbUtils.GetInt(reader, "TotalCost"),
                UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                UserProfile = new UserProfile()
                {
                    Id = DbUtils.GetInt(reader, "MyWishListId"),
                    Email = DbUtils.GetString(reader, "Email")
                }
            };
        }
    }
}
