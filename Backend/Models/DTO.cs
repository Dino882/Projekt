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


public record MijesanjeDTORead (int Sifra, int BodoviMi, int BodoviVi, int ZvanjeMi, int ZvanjeVi, int stiglja, int belot);

public record MijesanjeDTOInsertUpdate(
    [Required(ErrorMessage = "BodoviMi obavezno")]
    int BodoviMi,

    [Required(ErrorMessage = "BodoviVi obavezno")]
    int BodoviVi,

    [Required(ErrorMessage = "ZvanjeMi obavezno")]
    int ZvanjeMi,

    [Required(ErrorMessage = "ZvanjeVi obavezno")]
    int ZvanjeVi,

    [Required(ErrorMessage = "stiglja ")]
    int stiglja,

    [Required(ErrorMessage = "belot")]
    int belot

    );