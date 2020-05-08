using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchoolMitAPI.Models
{
    public class TaskManager
    {
        [Key]
        public Guid ID { get; set; }
        public string Message { get; set; }
        public int[] Days { get; set; }
        public DateTime Time { get; set; }
        public string[] Platforms { get; set; }

        public TaskManager()
        {
            ID = Guid.NewGuid();
            Time = DateTime.Now;
        }
    }
}
