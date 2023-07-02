package hr.stiven.eracunplus.rest.model;

import java.time.LocalDate;

import lombok.Builder;

@Builder
public record RacunListItem(Long id, LocalDate datumIzdavanja, String brojRacuna, String nazivIzdavatelja, String nazivPrimatelja, LocalDate rokPlacanja, Integer valuta) {

}
