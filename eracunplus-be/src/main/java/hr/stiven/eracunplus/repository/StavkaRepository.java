package hr.stiven.eracunplus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.stiven.eracunplus.entity.StavkaEntity;

@Repository
public interface StavkaRepository extends JpaRepository<StavkaEntity, Long>{

}
