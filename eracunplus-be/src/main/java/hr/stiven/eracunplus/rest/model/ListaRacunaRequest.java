package hr.stiven.eracunplus.rest.model;

import java.time.LocalDate;

public record ListaRacunaRequest(String brojRacuna, LocalDate datumIzdavanja, String nazivIzdavatelja, String nazivPrimatelja, LocalDate rokPlacanja, Integer valuta,
		Integer page, Integer pageSize, String field, String sort) {
}

