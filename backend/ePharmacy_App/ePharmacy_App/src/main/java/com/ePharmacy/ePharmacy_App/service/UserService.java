package com.ePharmacy.ePharmacy_App.service;


import com.ePharmacy.ePharmacy_App.entity.Cart;
import com.ePharmacy.ePharmacy_App.entity.User;

import com.ePharmacy.ePharmacy_App.repository.CartRepository;
import com.ePharmacy.ePharmacy_App.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserService
{
    @Autowired
    UserRepository userRepository;

    @Autowired
    CartRepository cartRepository;

    public List<User> getAllUsers()
    {
        List<User> userList = userRepository.findAll();
        return userList;
    }

    public User getSingleUser(Integer userId)
    {
        Optional<User> user = userRepository.findById(userId);

        if(user.isEmpty())
            return new User();

        return user.get();
    }

    public User addUser(User user)
    {
        userRepository.save(user);

        Cart cart = new Cart();
        cart.setCart_id(Long.valueOf(user.getUserId()));
        cartRepository.save(cart);
        user.getCart().setCart_id(cart.getCart_id()); ;
        return user;
    }

}
