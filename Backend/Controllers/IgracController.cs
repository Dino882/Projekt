using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Text;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class IgracController : BelaBlokController<Igrac, IgracDTORead, IgracDTOInsertUpdate>
    {
        public IgracController(EdunovaContext context) : base(context)
        {
            DbSet = _context.Igraci;
        }
        protected override void KontrolaBrisanje(Igrac entitet)
        {
            var entitetIzbaze = _context.Igraci
                //.Include(x => x.Grupe)
                .FirstOrDefault(x => x.Sifra == entitet.Sifra);

            if (entitetIzbaze == null)
            {
                throw new Exception("Ne postoji igrač s šifrom " + entitet.Sifra + " u bazi");
            }
            //            if (entitetIzbaze.Grupe != null && entitetIzbaze.Grupe.Count > 0)
            //            {
            //                StringBuilder sb = new();
            //                sb.Append("Polaznik se ne može obrisati jer je postavljen na grupama: ");
            //                foreach (var e in entitetIzbaze.Grupe)
            //                {
            //                    sb.Append(e.Naziv).Append(", ");
            //                }

            //                throw new Exception(sb.ToString()[..^2]);
            //            }
            //        }

            //    }
        }
    }
}