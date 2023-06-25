package hr.stiven.eracunplus.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@Table(name = "sudionici")
@NoArgsConstructor
@AllArgsConstructor
public class SudionikEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSudionika;
	
	private String nazivTvrtke;
	private String oib;
	private String adresa;
	private String drzava;
	private String postanskiBroj;
	private String grad;
	private String kontaktOsoba;
	private String email;
	private String telefon;
	private String PIB;
	private String IBT;
	private String RBT;
	private String djelatnost;
}
