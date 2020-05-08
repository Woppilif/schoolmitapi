using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SchoolMitAPI.Models;

namespace SchoolMitAPI.Data
{
    public class TaskManagerContext : DbContext
    {
        public TaskManagerContext(DbContextOptions<TaskManagerContext> options) : base(options)
        {
        }

        public DbSet<TaskManager> TaskTaskManager { get; set; }
    }
}
