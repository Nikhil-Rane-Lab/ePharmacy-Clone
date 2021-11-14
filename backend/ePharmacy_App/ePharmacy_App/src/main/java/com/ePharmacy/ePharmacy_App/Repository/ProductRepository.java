package com.ePharmacy.ePharmacy_App.Repository;

import com.ePharmacy.ePharmacy_App.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Integer> {
}
