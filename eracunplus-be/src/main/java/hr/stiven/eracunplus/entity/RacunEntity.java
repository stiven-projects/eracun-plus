package hr.stiven.eracunplus.entity;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@Table(name = "racuni")
@NoArgsConstructor
@AllArgsConstructor
public class RacunEntity {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "primatelj_id_sudionika", referencedColumnName = "idSudionika")
    private SudionikEntity primatelj;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "izdavatelj_id_sudionika", referencedColumnName = "idSudionika")
    private SudionikEntity izdavatelj;

    private String brojRacuna;
    private LocalDate datumIzdavanja;
    private LocalDate rokPlacanja;
    private Integer valuta;
    private String opis;

    @OneToMany(mappedBy = "racun", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<StavkaEntity> stavke;

    private Integer placanje;
    private String brojKartice;
    private String racunP;
    private String iban;
    private String swift;
    private String referenca;
    private String dodatnaNapomena;
    private String specificniZahtjevi;
    private String ostaleInformacije;
    
}
