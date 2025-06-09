namespace long_distance_app_backend.Models
{
    public class Item
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }

        public int WardrobeID { get; set; }
        public Wardrobe Wardrobe { get; set; }
    }
}

