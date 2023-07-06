package hr.stiven.eracunplus.rest.model;

import java.math.BigDecimal;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record Stavka(
        @Size(max = 255, message = "Naziv stavke može sadržavati najviše 255 znakova")
        @NotNull(message = "Naziv stavke je obavezan") String naziv,
        @Size(max = 255, message = "Opis stavke može sadržavati najviše 255 znakova") String opis,
        @NotNull(message = "Količina stavke je obavezna")
        @Positive(message = "Količina stavke mora biti pozitivan broj") Integer kolicina,
        @NotNull(message = "Jedinična cijena stavke je obavezna")
        @Positive(message = "Jedinična cijena stavke mora biti pozitivan broj") BigDecimal jCijena,
        @NotNull(message = "Stopa stavke je obavezna")
        @Positive(message = "Stopa stavke mora biti pozitivan broj") BigDecimal stopa,
        @Positive(message = "Popust stavke mora biti pozitivan broj") BigDecimal popust
) {}
