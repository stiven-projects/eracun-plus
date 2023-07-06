package hr.stiven.eracunplus.rest.model;

import java.time.LocalDate;
import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;

@Builder
public record Racun(
		@Valid @NotNull Sudionik izdavatelj,
		@Valid @NotNull Sudionik primatelj,
        @Size(max = 255, message = "Broj računa može sadržavati najviše 255 znakova")
        @NotNull(message = "Broj računa je obavezan") String brojRacuna,
        @NotNull(message = "Datum izdavanja je obavezan") LocalDate datumIzdavanja,
        @Future(message = "Rok plaćanja mora biti u budućnosti") LocalDate rokPlacanja,
        @NotNull(message = "Valuta računa je obavezna") Integer valuta,
        @Size(max = 255, message = "Opis može sadržavati najviše 255 znakova") String opis,
        @Valid @NotEmpty(message = "Stavke računa su obavezne") List<Stavka> stavke,
        @NotNull(message = "Način plaćanja je obavezan") Integer placanje,
        @Size(max = 255, message = "Broj kartice može sadržavati najviše 255 znakova") String brojKartice,
        @Size(max = 255, message = "RačunP može sadržavati najviše 255 znakova") String racunP,
        @Size(max = 255, message = "IBAN može sadržavati najviše 255 znakova") String iban,
        @Size(max = 255, message = "SWIFT može sadržavati najviše 255 znakova") String swift,
        @Size(max = 255, message = "Referenca može sadržavati najviše 255 znakova") String referenca,
        @Size(max = 255, message = "Dodatna napomena može sadržavati najviše 255 znakova") String dodatnaNapomena,
        @Size(max = 255, message = "Specifični zahtjevi mogu sadržavati najviše 255 znakova") String specificniZahtjevi,
        @Size(max = 255, message = "Ostale informacije mogu sadržavati najviše 255 znakova") String ostaleInformacije
) {}
