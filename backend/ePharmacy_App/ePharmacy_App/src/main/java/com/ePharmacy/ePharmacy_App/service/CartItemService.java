package com.ePharmacy.ePharmacy_App.service;

import com.ePharmacy.ePharmacy_App.entity.Cart;
import com.ePharmacy.ePharmacy_App.entity.Cart_Item;
import com.ePharmacy.ePharmacy_App.entity.Product;
import com.ePharmacy.ePharmacy_App.entity.User;
import com.ePharmacy.ePharmacy_App.repository.CartItemRepository;
import com.ePharmacy.ePharmacy_App.repository.ProductRepository;
import com.ePharmacy.ePharmacy_App.repository.UserRepository;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemService {

    @Autowired
    CartItemRepository cartItemRepository;

    @Autowired
    UserService userService;

    @Autowired
    ProductRepository productRepository;

    public String addtoCart(Long userId, Long prodId , int qty){

        User user = userService.getSingleUser(userId);

        Product product = productRepository.findById(prodId).get();


        Cart cart = user.getCart();

        List<Cart_Item> cartItems = cart.getCart_items() ;

        //check If purchased product is already existing in the cartitem  table;
        for(Cart_Item cartItem : cartItems){
            if(cartItem.getProduct().getProduct_id() ==prodId){
               cartItem.setQuantity(qty);
               cartItem.setTotal(product.getPrice()*qty);
               cartItemRepository.save(cartItem);
                return "Item added in Cart";
            }
        }

        Cart_Item cartItem = new Cart_Item();
        cartItem.setQuantity(qty);
        cartItem.setTotal(product.getPrice()*qty);
        cartItem.setProduct(product);
        cartItem.setCart(cart);
        cartItemRepository.save(cartItem);

        return "Item added in Cart";
    }

}
