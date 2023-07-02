package hr.stiven.eracunplus.rest.model;

import lombok.Builder;

@Builder
public record Sudionik(String nazivTvrtke, String oib, String adresa, String drzava,
        String postanskiBroj, String grad, String kontaktOsoba, String email, String telefon,
        String PIB, String IBT, String RBT, String djelatnost) {
}
