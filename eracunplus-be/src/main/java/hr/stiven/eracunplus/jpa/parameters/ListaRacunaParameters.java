package hr.stiven.eracunplus.jpa.parameters;

import java.time.LocalDate;

import lombok.Builder;

@Builder
public record ListaRacunaParameters(String nazivIzdavatelja, String nazivPrimatelja, String brojRacuna, 
		LocalDate datumIzdavanja, LocalDate rokPlacanja, Integer valuta){

}
