package com.admission.demo.Repository;

import com.admission.demo.Model.studentReg;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface studRepo  extends JpaRepository<studentReg, Long>{
    
    Optional<studentReg> findByRole(String role);
    Optional<studentReg> findByEmail(String email);
}