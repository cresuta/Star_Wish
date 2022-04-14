namespace StarWish.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public string Condition { get; set; }
        
        //url to demo product listing on eBay if user wants additional item details
        public string ItemWebUrl { get; set; }

        public int MyWishListId { get; set; }
        public MyWishList MyWishList { get; set; }
    }
}
