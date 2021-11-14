package com.ePharmacy.ePharmacy_App.controller;

import com.ePharmacy.ePharmacy_App.entity.Product;
import com.ePharmacy.ePharmacy_App.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/product")
    public List<Product> getAllBooks(){
        List<Product> product = productService.findProduct();
        return product;
    }
}
