package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.entity.SudionikEntity;
import hr.stiven.eracunplus.rest.model.Racun;

@Component
public class RacunEntityMapper {

	public RacunEntity toEntity(Racun racun, SudionikEntity izdavatelj, SudionikEntity primatelj) {
	    return RacunEntity.builder()
	            .izdavatelj(izdavatelj)
	            .primatelj(primatelj)
	            .brojRacuna(racun.brojRacuna())
	            .datumIzdavanja(racun.datumIzdavanja())
	            .rokPlacanja(racun.rokPlacanja())
	            .valuta(racun.valuta())
	            .opis(racun.opis())
	            .placanje(racun.placanje())
	            .brojKartice(racun.brojKartice())
	            .racunP(racun.racunP())
	            .iban(racun.iban())
	            .swift(racun.swift())
	            .referenca(racun.referenca())
	            .dodatnaNapomena(racun.dodatnaNapomena())
	            .specificniZahtjevi(racun.specificniZahtjevi())
	            .ostaleInformacije(racun.ostaleInformacije())
	            .build();
	}
}
