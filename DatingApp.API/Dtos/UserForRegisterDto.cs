using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    /// <summary>
    /// Register user DTO
    /// </summary>
    public class UserForRegisterDto
    {
        /// <summary>
        /// Username
        /// </summary>
        /// <value>Username</value>
        [Required]
        public string Username { get; set; }

        /// <summary>
        /// Password
        /// </summary>
        /// <value>Password</value>
        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters")]
        public string Password { get; set; }
    }
}