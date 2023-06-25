package hr.stiven.eracunplus.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.stiven.eracunplus.rest.model.Racun;
import hr.stiven.eracunplus.service.RacunService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/racuni")
public class RacunController {

	@Autowired
	RacunService racunService;
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
	private ResponseEntity<Object> postRacun(@RequestBody Racun racun){
		log.info("Spremanje računa");
		Long idRacuna = racunService.spremiRacun(racun);
		return ResponseEntity.created(URI.create("")).build();
	}
}
