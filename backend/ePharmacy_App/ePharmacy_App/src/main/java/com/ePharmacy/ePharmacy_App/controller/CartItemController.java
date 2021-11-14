package com.ePharmacy.ePharmacy_App.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class CartItemController {


   @PostMapping("/addtocart/{userid}/{productid}/{quantity}")
   public String addtoCart(@PathVariable("userid") Long userId , @PathVariable("productId") Long prodId, @PathVariable("quantity") int qty ){



      return "product added";
   }

}
