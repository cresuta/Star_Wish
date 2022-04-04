using System;

namespace StarWish.Models
{
    public class MyWishList
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime CreateDateTime { get; set; }

        public int NumberOfProducts { get; set; }

        public int TotalCost { get; set; }

        public int UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
    }
}
