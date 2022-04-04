using System;
using System.ComponentModel.DataAnnotations;

namespace StarWish.Models
{
    public class UserProfile
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }
        [Required]
        [MaxLength(50)]
        public string DisplayName { get; set; }
        [Required]
        [DataType(DataType.EmailAddress)]
        [MaxLength(255)]
        public string Email { get; set; }
        public string Password { get; set; }

        [DataType(DataType.Url)]
        [MaxLength(255)]
        public string ProfileImage { get; set; }

        public DateTime CreateDateTime { get; set; }

        public string FullName
        {
            get 
            {
                return $"{FirstName} {LastName}";
                
            }
        }

    }
}
