using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class UsersController : BaseApiController
    {
        public DataContext Context { get; }
        public UsersController(DataContext context)
        {
            this.Context = context;
        }


        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            return await Context.Users.ToListAsync<AppUser>();

        }

        [Authorize]
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(AppUser))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            var user = await Context.Users.FindAsync(id);

            return user == null ? NotFound() : Ok(user);
        }
    }
}