namespace DatingApp.API.Models
{
    /// <summary>
    /// User model
    /// </summary>
    public class User
    {
        /// <summary>
        /// User id
        /// </summary>
        /// <value>Id</value>
        public int Id { get; set; }
        /// <summary>
        /// Username
        /// </summary>
        /// <value>Username</value>
        public string Username { get; set; }
        /// <summary>
        /// PasswordHash
        /// </summary>
        /// <value>PasswordHash</value>
        public byte[] PasswordHash { get; set; }
        /// <summary>
        /// PasswordSalt
        /// </summary>
        /// <value>PasswordSalt</value>
        public byte[] PasswordSalt { get; set; }
    }
}