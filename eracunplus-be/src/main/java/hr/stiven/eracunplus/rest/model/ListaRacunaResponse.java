package hr.stiven.eracunplus.rest.model;

import java.util.List;

public record ListaRacunaResponse(List<RacunListItem> data, Long totalData) {
	
}
