package com.ePharmacy.ePharmacy_App.repository;

import com.ePharmacy.ePharmacy_App.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {

}
