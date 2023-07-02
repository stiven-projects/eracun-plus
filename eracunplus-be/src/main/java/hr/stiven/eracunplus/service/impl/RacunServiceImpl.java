package hr.stiven.eracunplus.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.entity.SudionikEntity;
import hr.stiven.eracunplus.exception.GloballyHandledException;
import hr.stiven.eracunplus.mapper.ListaRacunaParametersMapper;
import hr.stiven.eracunplus.mapper.RacunEntityMapper;
import hr.stiven.eracunplus.mapper.RacunListItemMapper;
import hr.stiven.eracunplus.mapper.RacunMapper;
import hr.stiven.eracunplus.mapper.StavkaEntityMapper;
import hr.stiven.eracunplus.mapper.SudionikEntityMapper;
import hr.stiven.eracunplus.repository.RacunRepository;
import hr.stiven.eracunplus.repository.StavkaRepository;
import hr.stiven.eracunplus.repository.SudionikRepository;
import hr.stiven.eracunplus.rest.model.ListaRacunaRequest;
import hr.stiven.eracunplus.rest.model.ListaRacunaResponse;
import hr.stiven.eracunplus.rest.model.Racun;
import hr.stiven.eracunplus.rest.model.Stavka;
import hr.stiven.eracunplus.rest.model.Sudionik;
import hr.stiven.eracunplus.service.RacunService;
import hr.stiven.eracunplus.utils.DataTableUtils;

@Service
public class RacunServiceImpl implements RacunService {

	@Autowired
	SudionikRepository sudionikRepository;
	
	@Autowired
	SudionikEntityMapper sudionikEntityMapper;
	
	@Autowired
	RacunRepository racunRepository;
	
	@Autowired
	RacunEntityMapper racunEntityMapper;
	
	@Autowired
	StavkaRepository stavkaRepository;
	
	@Autowired
	StavkaEntityMapper stavkaEntityMapper;
	
	@Autowired
	RacunListItemMapper listItemMapper;
	
	@Autowired
	DataTableUtils dataTableUtils;
	
	@Autowired
	ListaRacunaParametersMapper listaRacunaParametersMapper;
	
	@Autowired
	RacunMapper racunMapper;
	
	@Override
	public Racun getRacun(Long id) {
		RacunEntity racunEntity = racunRepository
				.findById(id)
				.orElseThrow(() -> new GloballyHandledException("Nije pronađen račun s dobivenim identifikatorom", HttpStatus.NOT_FOUND));
		
		return racunMapper.toRacun(racunEntity);
	}
	
	@Override
	public ListaRacunaResponse getListaRacuna(ListaRacunaRequest listaRacunaRequest) {
		Pageable pageable = PageRequest.of(
				listaRacunaRequest.page(), 
				listaRacunaRequest.pageSize(), 
				Direction.fromString(listaRacunaRequest.sort()),
				dataTableUtils.mapSortColumn(listaRacunaRequest.field()));
		
		Page<RacunEntity> racuniPage = racunRepository.getListaRacunaCustom(
				listaRacunaParametersMapper.toParameters(listaRacunaRequest),
				pageable);
		
		return new ListaRacunaResponse(
				racuniPage.getContent().stream().map(listItemMapper::toItem).toList(), 
				racuniPage.getTotalElements());
	}
	
	@Override
	@Transactional(propagation = Propagation.REQUIRES_NEW, rollbackFor = Exception.class)
	public Long spremiRacun(Racun request) {
		SudionikEntity izdavatelj = spremiSudionika(request.izdavatelj());	
		SudionikEntity primatelj = spremiSudionika(request.primatelj());
		
		RacunEntity racun = spremiRacun(request, izdavatelj, primatelj);
		
		if(request.stavke() != null && !request.stavke().isEmpty())
			spremiStavke(request.stavke(), racun);
		
		return racun.getId();
	}

	private void spremiStavke(List<Stavka> stavke, RacunEntity racun) {
		stavkaRepository
			.saveAllAndFlush(
					stavke
						.stream()
						.map(stavka -> stavkaEntityMapper.toEntity(stavka, racun))
						.toList()
					);
	}

	private RacunEntity spremiRacun(Racun racun, SudionikEntity izdavatelj, SudionikEntity primatelj) {
		return racunRepository
				.saveAndFlush(racunEntityMapper.toEntity(racun, izdavatelj, primatelj));
	}

	private SudionikEntity spremiSudionika(Sudionik sudionik) {
		return sudionikRepository
				.saveAndFlush(sudionikEntityMapper.toEntity(sudionik));
	}

}
