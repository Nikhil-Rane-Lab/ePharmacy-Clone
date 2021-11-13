package com.ePharmacy.ePharmacy_App.entity;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long product_id;
    private String product_name;
    private String brand_name;
    private String product_qty;
    private Boolean prescription_required;
    private int price;
    private int discount_percent;
    private int rating;
    private String image_url;

}


