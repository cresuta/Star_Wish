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

        public Product GetById(int id)
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
                         WHERE p.Id = @id
                        ORDER BY p.Price DESC";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    Product product = null;
                    if (reader.Read())
                    {
                        product = NewProductFromReader(reader);
                    }

                    reader.Close();

                    return product;
                }
            }
        }

        public List<Product> GetAllProductsByWishListId(int id)
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
                         WHERE p.MyWishListId = @id
                        ORDER BY p.Price DESC";

                    cmd.Parameters.AddWithValue("@id", id);

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

        public void Add(Product product)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Product (
                            Title, ImageUrl, Price, Quantity, Condition,
                            ItemWebUrl, MyWishListId)
                        OUTPUT INSERTED.ID
                        VALUES (
                             @Title, @ImageUrl, @Price, @Quantity, @Condition,
                            @ItemWebUrl, @MyWishListId)";

                    DbUtils.AddParameter(cmd, "@Title", product.Title);
                    DbUtils.AddParameter(cmd, "@ImageUrl", product.ImageUrl);
                    DbUtils.AddParameter(cmd, "@Price", product.Price);
                    DbUtils.AddParameter(cmd, "@Quantity", product.Quantity);
                    DbUtils.AddParameter(cmd, "@Condition", product.Condition);
                    DbUtils.AddParameter(cmd, "@ItemWebUrl", product.ItemWebUrl);
                    DbUtils.AddParameter(cmd, "@MyWishListId", product.MyWishListId);

                    product.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Product WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
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
