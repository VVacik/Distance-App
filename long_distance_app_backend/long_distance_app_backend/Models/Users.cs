using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace long_distance_app_backend.Models
{
    public class User : IdentityUser
    {
        public List<Wardrobe> Wardrobes { get; set; }
    }
}