package com.admission.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.admission.demo.Model.Contact;

public interface ContactRepo extends JpaRepository<Contact, Long>{
}
