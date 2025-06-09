using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using long_distance_app_backend.Models;

namespace long_distance_app_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WardrobesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WardrobesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Wardrobes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Wardrobe>>> GetWardrobes()
        {
            return await _context.Wardrobes.ToListAsync();
        }

        // GET: api/Wardrobes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Wardrobe>> GetWardrobe(int id)
        {
            var wardrobe = await _context.Wardrobes.FindAsync(id);

            if (wardrobe == null)
            {
                return NotFound();
            }

            return wardrobe;
        }

        // PUT: api/Wardrobes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWardrobe(int id, Wardrobe wardrobe)
        {
            if (id != wardrobe.Id)
            {
                return BadRequest();
            }

            _context.Entry(wardrobe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WardrobeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Wardrobes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Wardrobe>> PostWardrobe(Wardrobe wardrobe)
        {
            _context.Wardrobes.Add(wardrobe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWardrobe", new { id = wardrobe.Id }, wardrobe);
        }

        // DELETE: api/Wardrobes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWardrobe(int id)
        {
            var wardrobe = await _context.Wardrobes.FindAsync(id);
            if (wardrobe == null)
            {
                return NotFound();
            }

            _context.Wardrobes.Remove(wardrobe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WardrobeExists(int id)
        {
            return _context.Wardrobes.Any(e => e.Id == id);
        }
    }
}
