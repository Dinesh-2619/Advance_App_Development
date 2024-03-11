package com.admission.demo.Service;

import com.admission.demo.Model.Contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.admission.demo.Repository.ContactRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepo ContactRepo;

    public List<Contact> getAllFeed() {
        return ContactRepo.findAll();
    }

    public Optional<Contact> getFeedById(Long id) {
        return ContactRepo.findById(id);
    }

    public Contact createFeed(Contact Feed) {
        return ContactRepo.save(Feed);
    }

    public Contact updateFeed(Long id, Contact updatedFeed) {
        Optional<Contact> Feed = ContactRepo.findById(id);
        if (Feed.isPresent()) {
            updatedFeed.setId(id);
            return ContactRepo.save(updatedFeed);
        } else {
            throw new RuntimeException("Contact not found");
        }
    }

    public void deleteFeed(Long id) {
        ContactRepo.deleteById(id);
    }
}