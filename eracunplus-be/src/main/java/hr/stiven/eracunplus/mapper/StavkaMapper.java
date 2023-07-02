package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.StavkaEntity;
import hr.stiven.eracunplus.rest.model.Stavka;

@Component
public class StavkaMapper {
	
	public Stavka toStavka(StavkaEntity stavkaEntity) {
		return Stavka.builder()
	            .naziv(stavkaEntity.getNaziv())
	            .opis(stavkaEntity.getOpis())
	            .kolicina(stavkaEntity.getKolicina())
	            .jCijena(stavkaEntity.getJCijena())
	            .stopa(stavkaEntity.getStopa())
	            .popust(stavkaEntity.getPopust())
				.build();
	}
}
