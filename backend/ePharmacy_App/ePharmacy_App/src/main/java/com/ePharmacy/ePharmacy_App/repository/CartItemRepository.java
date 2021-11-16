package com.ePharmacy.ePharmacy_App.repository;

import com.ePharmacy.ePharmacy_App.entity.Cart_Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemRepository  extends JpaRepository<Cart_Item,Long> {


    @Query(value ="SELECT * from cart_item cl where cl.cart_id=?1",nativeQuery = true)
    public List<Cart_Item> getItemsinCart(Long cartId);

}
