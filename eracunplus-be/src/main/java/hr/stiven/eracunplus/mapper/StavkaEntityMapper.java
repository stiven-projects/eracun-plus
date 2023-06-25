package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.entity.StavkaEntity;
import hr.stiven.eracunplus.rest.model.Stavka;

@Component
public class StavkaEntityMapper {
	
	public StavkaEntity toEntity(Stavka stavka, RacunEntity racun) {
		return StavkaEntity.builder()
				.racun(racun)
	            .naziv(stavka.naziv())
	            .opis(stavka.opis())
	            .kolicina(stavka.kolicina())
	            .jCijena(stavka.jCijena())
	            .stopa(stavka.stopa())
	            .popust(stavka.popust())
	            .build();
	};
}
