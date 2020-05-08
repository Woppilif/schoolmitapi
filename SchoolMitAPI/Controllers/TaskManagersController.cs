using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchoolMitAPI.Data;
using SchoolMitAPI.Models;

namespace SchoolMitAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskManagersController : ControllerBase
    {
        private readonly TaskManagerContext _context;

        public TaskManagersController(TaskManagerContext context)
        {
            _context = context;
        }

        // GET: api/TaskManagers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskManager>>> GetTaskTaskManager()
        {
            return await _context.TaskTaskManager.ToListAsync();
        }

        // GET: api/TaskManagers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskManager>> GetTaskManager(Guid id)
        {
            var taskManager = await _context.TaskTaskManager.FindAsync(id);

            if (taskManager == null)
            {
                return NotFound();
            }

            return taskManager;
        }

        // PUT: api/TaskManagers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskManager(Guid id, TaskManager taskManager)
        {
            if (id != taskManager.ID)
            {
                return BadRequest();
            }

            _context.Entry(taskManager).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TaskManagerExists(id))
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

        // POST: api/TaskManagers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TaskManager>> PostTaskManager(TaskManager taskManager)
        {
            _context.TaskTaskManager.Add(taskManager);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTaskManager", new { id = taskManager.ID }, taskManager);
        }

        // DELETE: api/TaskManagers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TaskManager>> DeleteTaskManager(Guid id)
        {
            var taskManager = await _context.TaskTaskManager.FindAsync(id);
            if (taskManager == null)
            {
                return NotFound();
            }

            _context.TaskTaskManager.Remove(taskManager);
            await _context.SaveChangesAsync();

            return taskManager;
        }

        private bool TaskManagerExists(Guid id)
        {
            return _context.TaskTaskManager.Any(e => e.ID == id);
        }
    }
}
