package hr.stiven.eracunplus.mapper;

import org.springframework.stereotype.Component;

import hr.stiven.eracunplus.entity.SudionikEntity;
import hr.stiven.eracunplus.rest.model.Sudionik;

@Component
public class SudionikMapper {
	
	public Sudionik toSudionik(SudionikEntity sudionikEntity){
		return Sudionik.builder()
	            .nazivTvrtke(sudionikEntity.getNazivTvrtke())
	            .oib(sudionikEntity.getOib())
	            .adresa(sudionikEntity.getAdresa())
	            .drzava(sudionikEntity.getDrzava())
	            .postanskiBroj(sudionikEntity.getPostanskiBroj())
	            .grad(sudionikEntity.getGrad())
	            .kontaktOsoba(sudionikEntity.getKontaktOsoba())
	            .email(sudionikEntity.getEmail())
	            .telefon(sudionikEntity.getTelefon())
	            .pib(sudionikEntity.getPIB())
	            .ibt(sudionikEntity.getIBT())
	            .rbt(sudionikEntity.getRBT())
	            .djelatnost(sudionikEntity.getDjelatnost())
				.build();
	}
}
