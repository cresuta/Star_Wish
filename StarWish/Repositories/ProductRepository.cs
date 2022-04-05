using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using StarWish.Models;
using StarWish.Utils;
using System.Collections.Generic;

namespace StarWish.Repositories
{
    public class ProductRepository : BaseRepository, IProductRepository
    {
        public ProductRepository(IConfiguration configuration) : base(configuration){}

        public List<Product> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                              
                       SELECT p.Id AS ProductId, p.Title, p.ImageUrl AS ProductImage,
                              p.Price, p.Quantity, p.Condition,
                              p.ItemWebUrl AS ProductWebUrl, p.MyWishListId,
                              mwl.[Name] AS MyWishListName
                         FROM Product AS p
                              LEFT JOIN MyWishList AS mwl ON p.MyWishListId = mwl.id
                        ORDER BY p.Price DESC";

                    var reader = cmd.ExecuteReader();

                    var products = new List<Product>();
                    while (reader.Read())
                    {
                        products.Add(NewProductFromReader(reader));
                    }

                    reader.Close();

                    return products;
                }
            }
        }

        private Product NewProductFromReader(SqlDataReader reader)
        {
            return new Product()
            {
                Id = DbUtils.GetInt(reader,"ProductId"),
                Title = DbUtils.GetString(reader,"Title"),
                ImageUrl = DbUtils.GetString(reader, "ProductImage"),
                Price = DbUtils.GetInt(reader,"Price"),
                Quantity = DbUtils.GetInt(reader,"Quantity"),
                Condition = DbUtils.GetString(reader,"Condition"),
                ItemWebUrl = DbUtils.GetString(reader,"ProductWebUrl"),
                MyWishList = new MyWishList()
                {
                    Id = DbUtils.GetInt(reader,"MyWishListId"),
                    Name = DbUtils.GetString(reader,"MyWishListName")
                }
            };
        }


    }
}
