using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolMitAPI.Migrations
{
    public partial class Task : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TaskTaskManager",
                columns: table => new
                {
                    ID = table.Column<Guid>(nullable: false),
                    Message = table.Column<string>(nullable: true),
                    Days = table.Column<int[]>(nullable: true),
                    Time = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TaskTaskManager", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TaskTaskManager");
        }
    }
}
