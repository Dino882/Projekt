using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class MijesanjeController : BelaBlokController<Mijesanje, MijesanjeDTORead, MijesanjeDTOInsertUpdate>
    {
        public MijesanjeController(EdunovaContext context) : base(context)
        {
            DbSet = _context.Mijesanja;
        }
        protected override void KontrolaBrisanje(Mijesanje entitet)
        {
            var entitetIzbaze = _context.Mijesanja
                //.Include(x => x.Grupe)
                .FirstOrDefault(x => x.Sifra == entitet.Sifra);

            if (entitetIzbaze == null)
            {
                throw new Exception("Ne postoji miješanje s šifrom " + entitet.Sifra + " u bazi");
            }

        }
    }
}