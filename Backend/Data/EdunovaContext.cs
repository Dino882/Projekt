

using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class EdunovaContext:DbContext
    {
        public EdunovaContext(DbContextOptions<EdunovaContext> options) 
            : base(options) { 

        }

        public DbSet<Igrac> Igraci
            
        { get; set; }

        public DbSet<Mijesanje> Mijesanja
        { get; set; }

        public DbSet<Par> Parovi
        { get; set; }

        public DbSet<Partija> Partije
        { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Par>().HasOne(p => p.Igrac1);
            modelBuilder.Entity<Par>().HasOne(p => p.Igrac2);
        }
    }
}
