using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    /// <summary>
    /// Login user DTO
    /// </summary>
    public class UserForLoginDto
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
        public string Password { get; set; }
    }
}