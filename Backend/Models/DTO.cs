using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public record IgracDTORead(int Sifra, string ime, string prezime
        );

    public record IgracDTOInsertUpdate(
        [Required(ErrorMessage = "Ime obavezno")]
        string? Ime,

    [Required(ErrorMessage = "Prezime obavezno")]
        string? Prezime);
}