package hr.stiven.eracunplus.mapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.rest.model.Racun;

@Component
public class RacunMapper {
	
	@Autowired
	SudionikMapper sudionikMapper;
	
	@Autowired
	StavkaMapper stavkaMapper;
	
	public Racun toRacun(RacunEntity entity) {
		return Racun.builder()
				.izdavatelj(sudionikMapper.toSudionik(entity.getIzdavatelj()))
				.primatelj(sudionikMapper.toSudionik(entity.getPrimatelj()))
	            .brojRacuna(entity.getBrojRacuna())
	            .datumIzdavanja(entity.getDatumIzdavanja())
	            .rokPlacanja(entity.getRokPlacanja())
	            .valuta(entity.getValuta())
	            .opis(entity.getOpis())
	            .placanje(entity.getPlacanje())
	            .brojKartice(entity.getBrojKartice())
	            .racunP(entity.getRacunP())
	            .iban(entity.getIban())
	            .swift(entity.getSwift())
	            .referenca(entity.getReferenca())
	            .dodatnaNapomena(entity.getDodatnaNapomena())
	            .specificniZahtjevi(entity.getSpecificniZahtjevi())
	            .ostaleInformacije(entity.getOstaleInformacije())
	            .stavke(entity.getStavke().stream().map(stavkaMapper::toStavka).toList())
				.build();
	}
}
