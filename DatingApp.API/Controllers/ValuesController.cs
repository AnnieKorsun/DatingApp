using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    /// <summary>
    /// Values methods
    /// </summary>
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        
        /// <summary>
        /// Instantiates ValuesController
        /// </summary>
        /// <param name="context">DataContext</param>
        public ValuesController(DataContext context)
        {
            _context = context;
        }
        
        /// <summary>
        /// Returns all values.
        /// </summary>
        /// <returns>Values list</returns>
        [HttpGet]
        [ProducesResponseType(200)]
        public async Task<IActionResult> GetValuesAsync()
        {
            var values = await _context.Values.ToListAsync();
            return Ok(values);
        }

        /// <summary>
        /// Returns value by id.
        /// </summary>
        /// <param name="id">Value id</param>
        /// <returns>Value</returns>
        [AllowAnonymous]
        [HttpGet("{id}")]
        [ProducesResponseType(200)]
        public IActionResult GetValue(int id)
        {
            var value = _context.Values.FirstOrDefault(x=>x.Id == id);
            return Ok(value);
        }

        /// <summary>
        /// Under construction.
        /// </summary>
        /// <param name="value"></param>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        /// <summary>
        /// Under construction.
        /// </summary>
        /// <param name="value"></param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        /// <summary>
        /// Under construction.
        /// </summary>
        /// <param name="value"></param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
