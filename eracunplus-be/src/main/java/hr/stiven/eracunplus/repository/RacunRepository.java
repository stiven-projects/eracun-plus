package hr.stiven.eracunplus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.stiven.eracunplus.entity.RacunEntity;

@Repository
public interface RacunRepository extends JpaRepository<RacunEntity, Long>{

}
