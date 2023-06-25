package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.SudionikEntity;
import hr.stiven.eracunplus.rest.model.Sudionik;

@Component
public class SudionikEntityMapper {
	public SudionikEntity toEntity(Sudionik sudionik){
		return SudionikEntity.builder()
	            .nazivTvrtke(sudionik.nazivTvrtke())
	            .oib(sudionik.oib())
	            .adresa(sudionik.adresa())
	            .drzava(sudionik.drzava())
	            .postanskiBroj(sudionik.postanskiBroj())
	            .grad(sudionik.grad())
	            .kontaktOsoba(sudionik.kontaktOsoba())
	            .email(sudionik.email())
	            .telefon(sudionik.telefon())
	            .PIB(sudionik.PIB())
	            .IBT(sudionik.IBT())
	            .RBT(sudionik.RBT())
	            .djelatnost(sudionik.djelatnost())
	            .build();
	}
}
