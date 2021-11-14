package com.ePharmacy.ePharmacy_App.controller;


import com.ePharmacy.ePharmacy_App.entity.User;
import com.ePharmacy.ePharmacy_App.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController
{
    @Autowired
    UserService userService;

    @GetMapping("/userservice/users")
    public List<User> getAllUsers()
    {
        List<User> userInfo = userService.getAllUsers();
        return userInfo;
    }

    @GetMapping("/userservice/users/{id}")
    public User getSingleUser(@PathVariable("id") Long userId)
    {
        User user = userService.getSingleUser(userId);
        return user;
    }

    @PostMapping("/userservice/users")
    public User addUser(@RequestBody User user)
    {
        User user1 = userService.addUser(user);
        return user1;
    }
}
