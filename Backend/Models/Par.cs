using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Par : Entitet
    {
        [ForeignKey("igrac1")]

        public Igrac Igrac1 { get; set; }
        [ForeignKey("igrac2")]
        public Igrac Igrac2 { get; set; }
        public string? NadimakIgrac1 { get; set; }
        public string? NadimakIgrac2 { get; set; }
       




    }
}

