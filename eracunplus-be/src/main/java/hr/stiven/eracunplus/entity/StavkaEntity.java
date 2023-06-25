package hr.stiven.eracunplus.entity;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@Table(name = "stavke")
@NoArgsConstructor
@AllArgsConstructor
public class StavkaEntity {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "racun_id")
    private RacunEntity racun;

    private String naziv;
    private String opis;
    private Integer kolicina;
    private BigDecimal jCijena;
    private BigDecimal stopa;
    private BigDecimal popust;
}
