package com.ePharmacy.ePharmacy_App.repository;

import com.ePharmacy.ePharmacy_App.entity.Cart_Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartItemRepository  extends JpaRepository<Cart_Item,Long> {

}
