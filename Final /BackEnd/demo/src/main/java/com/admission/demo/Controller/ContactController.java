package com.admission.demo.Controller;


import com.admission.demo.Model.Contact;
import com.admission.demo.Service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins ="http://localhost:5173/",allowedHeaders = "*")
public class ContactController {

    @Autowired
    private ContactService ContactService;

    @GetMapping("/allcontact")
    public List<Contact> getAllFeed() {
        return ContactService.getAllFeed();
    }

    @PostMapping("/addcontact")
    public Contact createFeed(@RequestBody Contact Feed) {
        return ContactService.createFeed(Feed);
    }

    @PutMapping("/updatecontact/{id}")
    public Contact updateFeed(@PathVariable Long id,@RequestBody Contact updatedFeed) {
        return ContactService.updateFeed(id,updatedFeed);
    }

    @DeleteMapping("/deletecontact/{id}")
    public void deleteFeed(@PathVariable Long id) {
        ContactService.deleteFeed(id);
    }
}