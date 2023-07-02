package hr.stiven.eracunplus.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import hr.stiven.eracunplus.entity.RacunEntity;
import hr.stiven.eracunplus.jpa.parameters.ListaRacunaParameters;

@Repository
public interface RacunRepository extends JpaRepository<RacunEntity, Long>{

	@Query("""
			SELECT RAC 
			FROM RacunEntity RAC
			WHERE (:#{#parameters.datumIzdavanja} IS NULL OR RAC.datumIzdavanja = :#{#parameters.datumIzdavanja})
			 AND (:#{#parameters.rokPlacanja} IS NULL OR RAC.rokPlacanja = :#{#parameters.rokPlacanja})
			 AND (:#{#parameters.nazivIzdavatelja} IS NULL OR RAC.izdavatelj.nazivTvrtke LIKE %:#{#parameters.nazivIzdavatelja}%)
			 AND (:#{#parameters.nazivPrimatelja} IS NULL OR RAC.primatelj.nazivTvrtke LIKE %:#{#parameters.nazivIzdavatelja}%)
			 AND (:#{#parameters.brojRacuna} IS NULL OR RAC.brojRacuna LIKE %:#{#parameters.brojRacuna}%)
			 AND (:#{#parameters.valuta} IS NULL OR RAC.valuta = :#{#parameters.valuta})
			""")
	Page<RacunEntity> getListaRacunaCustom(ListaRacunaParameters parameters, Pageable pageable);
}
