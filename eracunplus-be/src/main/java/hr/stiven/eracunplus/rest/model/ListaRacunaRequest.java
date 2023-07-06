package hr.stiven.eracunplus.rest.model;

import java.time.LocalDate;

import jakarta.validation.constraints.Size;

public record ListaRacunaRequest(
        @Size(max = 255, message = "Broj računa može sadržavati najviše 255 znakova") String brojRacuna,
        LocalDate datumIzdavanja,
        @Size(max = 255, message = "Naziv izdavatelja može sadržavati najviše 255 znakova") String nazivIzdavatelja,
        @Size(max = 255, message = "Naziv primatelja može sadržavati najviše 255 znakova") String nazivPrimatelja,
        LocalDate rokPlacanja,
        Integer valuta,
        Integer page,
        Integer pageSize,
        String field,
        String sort
) {
}
