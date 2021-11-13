package com.ePharmacy.ePharmacy_App.repository;

import com.ePharmacy.ePharmacy_App.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {

}
