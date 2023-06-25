package hr.stiven.eracunplus.rest.model;

import org.springframework.web.multipart.MultipartFile;

public record Sudionik(String nazivTvrtke, String oib, MultipartFile logo, String adresa, String drzava,
		String postanskiBroj, String grad, String kontaktOsoba, String email, String pib, String ibt, String rbt,
		String djelatnost) {}
