package hr.stiven.eracunplus.controllers;

import java.net.URI;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import hr.stiven.eracunplus.rest.model.Racun;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/racuni")
public class RacunController {

	@PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
	private ResponseEntity<Object> postRacun(@ModelAttribute(name = "formData") Racun racun){
		log.info("Spremanje računa");
		return ResponseEntity.created(URI.create("")).build();
	}
}
