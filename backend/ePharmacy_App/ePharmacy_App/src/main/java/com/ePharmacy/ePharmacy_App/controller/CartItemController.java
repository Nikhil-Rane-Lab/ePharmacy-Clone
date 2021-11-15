package com.ePharmacy.ePharmacy_App.controller;


import com.ePharmacy.ePharmacy_App.entity.Cart_Item;
import com.ePharmacy.ePharmacy_App.entity.Product;
import com.ePharmacy.ePharmacy_App.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CartItemController {

    @Autowired
    CartItemService cartItemService;

   @PostMapping("/addtocart/users/{userid}/product/{pdid}")
   public String addtoCart(@RequestBody Cart_Item cartItem, @PathVariable("userid") Long userId , @PathVariable("pdid") Long productId ){

      return  cartItemService.addtoCart(userId,productId, cartItem.getQuantity());

   }

   @GetMapping("/cartItems/user/{userid}")
   public  List<Cart_Item> getItemsinCart(@PathVariable("userid") Long userId){
       return  cartItemService.getItemsinCart(userId);
   }

}
