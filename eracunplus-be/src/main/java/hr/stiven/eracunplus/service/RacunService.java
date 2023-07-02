package hr.stiven.eracunplus.service;

import hr.stiven.eracunplus.rest.model.ListaRacunaRequest;
import hr.stiven.eracunplus.rest.model.ListaRacunaResponse;
import hr.stiven.eracunplus.rest.model.Racun;

public interface RacunService {
	 public Long spremiRacun(Racun racun);
	 public ListaRacunaResponse getListaRacuna(ListaRacunaRequest listaRacunaRequest);
}
