package hr.stiven.eracunplus.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.entity.SudionikEntity;
import hr.stiven.eracunplus.mapper.RacunEntityMapper;
import hr.stiven.eracunplus.mapper.StavkaEntityMapper;
import hr.stiven.eracunplus.mapper.SudionikEntityMapper;
import hr.stiven.eracunplus.repository.RacunRepository;
import hr.stiven.eracunplus.repository.StavkaRepository;
import hr.stiven.eracunplus.repository.SudionikRepository;
import hr.stiven.eracunplus.rest.model.Racun;
import hr.stiven.eracunplus.rest.model.Stavka;
import hr.stiven.eracunplus.rest.model.Sudionik;
import hr.stiven.eracunplus.service.RacunService;

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
