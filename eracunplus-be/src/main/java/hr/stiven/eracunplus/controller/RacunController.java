package hr.stiven.eracunplus.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import hr.stiven.eracunplus.rest.model.ListaRacunaRequest;
import hr.stiven.eracunplus.rest.model.Racun;
import hr.stiven.eracunplus.service.RacunService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/racuni")
public class RacunController {

	@Autowired
	RacunService racunService;
	
	@GetMapping("/detalji/{id}")
	private ResponseEntity<Object> getRacun(@PathVariable Long id){
		log.info("Dohvat detalja računa");
		return ResponseEntity.ok(racunService.getRacun(id));
	}
	
	@PostMapping("/lista")
	private ResponseEntity<Object> postRacuni(@Valid @RequestBody ListaRacunaRequest listaRacunaRequest){
		log.info("Dohvat liste računa");
		return ResponseEntity.ok(racunService.getListaRacuna(listaRacunaRequest));
	}
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	private ResponseEntity<Object> postRacun(@Valid @RequestBody Racun racun){
		log.info("Spremanje računa");
		Long idRacuna = racunService.spremiRacun(racun);
		return ResponseEntity.created(
				UriComponentsBuilder
					.fromPath("/racuni/detalji")
					.queryParam("id", idRacuna)
					.build()
					.toUri())
				.build();
	}
}
