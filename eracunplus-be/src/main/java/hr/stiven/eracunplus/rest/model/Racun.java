package hr.stiven.eracunplus.rest.model;

import java.time.LocalDate;
import java.util.List;

import lombok.Builder;

@Builder
public record Racun(Sudionik izdavatelj, Sudionik primatelj, String brojRacuna, LocalDate datumIzdavanja,
		LocalDate rokPlacanja, Integer valuta, String opis, List<Stavka> stavke, Integer placanje, String brojKartice,
		String racunP, String iban, String swift, String referenca, String dodatnaNapomena, String specificniZahtjevi,
		String ostaleInformacije) {}
