package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.rest.model.RacunListItem;

@Component
public class RacunListItemMapper {
	public RacunListItem toItem(RacunEntity racunEntity){
		return RacunListItem.builder()
				.id(racunEntity.getId())
				.nazivIzdavatelja(racunEntity.getIzdavatelj().getNazivTvrtke())
				.nazivPrimatelja(racunEntity.getPrimatelj().getNazivTvrtke())
				.brojRacuna(racunEntity.getBrojRacuna())
				.datumIzdavanja(racunEntity.getDatumIzdavanja())
				.rokPlacanja(racunEntity.getRokPlacanja())
				.valuta(racunEntity.getValuta())
				.build();
	}
}
