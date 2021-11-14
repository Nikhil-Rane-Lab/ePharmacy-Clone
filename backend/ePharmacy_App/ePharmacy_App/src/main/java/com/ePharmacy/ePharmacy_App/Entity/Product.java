package com.ePharmacy.ePharmacy_App.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter

public class Product{
    @Id
    private int p_id;
    private String p_name;
    private String b_name;
    private String p_quantity;
    private boolean pres_required;
    private int currentp_price;
    private int oldp_price;
    private int disc_p;

}
