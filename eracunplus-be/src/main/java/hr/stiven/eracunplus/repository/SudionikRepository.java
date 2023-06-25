package hr.stiven.eracunplus.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import hr.stiven.eracunplus.entity.SudionikEntity;

@Repository
public interface SudionikRepository extends JpaRepository<SudionikEntity, Long>{

}
