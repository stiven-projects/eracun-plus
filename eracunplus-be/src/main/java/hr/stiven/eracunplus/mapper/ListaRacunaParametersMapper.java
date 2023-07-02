package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.jpa.parameters.ListaRacunaParameters;
import hr.stiven.eracunplus.rest.model.ListaRacunaRequest;

@Component
public class ListaRacunaParametersMapper {
	public ListaRacunaParameters toParameters(ListaRacunaRequest request){
		return ListaRacunaParameters.builder()
				.nazivIzdavatelja(request.nazivIzdavatelja())
				.nazivPrimatelja(request.nazivPrimatelja())
				.brojRacuna(request.brojRacuna())
				.datumIzdavanja(request.datumIzdavanja())
				.rokPlacanja(request.rokPlacanja())
				.valuta(request.valuta())
				.build();
	}
}
