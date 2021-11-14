package com.ePharmacy.ePharmacy_App.repository;


import com.ePharmacy.ePharmacy_App.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>
{
}
