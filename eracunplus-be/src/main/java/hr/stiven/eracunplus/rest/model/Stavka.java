package hr.stiven.eracunplus.rest.model;

import java.math.BigDecimal;

public record Stavka(String naziv, String opis, Integer kolicina, BigDecimal jCijena, BigDecimal stopa,
		BigDecimal popust) {

}
