using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SchoolMitAPI.Migrations
{
    public partial class Tas2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string[]>(
                name: "Platforms",
                table: "TaskTaskManager",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Platforms",
                table: "TaskTaskManager");
        }
    }
}
