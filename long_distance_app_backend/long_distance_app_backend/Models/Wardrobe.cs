using System.Collections.Generic;

namespace long_distance_app_backend.Models
{
    public class Wardrobe
    {
        public int Id { get; set; }
        public string localisation_Name { get; set; }

        public string UserId { get; set; } // ← bo IdentityUser.Id to string
        public User User { get; set; }

        public List<Item> Items { get; set; }
    }
}
