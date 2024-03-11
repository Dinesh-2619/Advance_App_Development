
package com.admission.demo.Controller;

import com.admission.demo.Dto.AuthRequest;
import com.admission.demo.Model.studentReg;
import com.admission.demo.Repository.studRepo;
import com.admission.demo.Service.JwtService;
import com.admission.demo.Service.studService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;

import java.util.List;

@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "http://localhost:5173/",allowedHeaders = "*")
public class studController {

    @Autowired
    private studService studService;

    @Autowired
    private studRepo studRepo;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @GetMapping("/all")
    public List<studentReg> getAllStudents() {
        return studService.getAllStudents();
    }
    @PostMapping("/addUser")
    public studentReg saveLogin(@RequestBody studentReg login) {
        return studService.saveLogin(login);
    }

    @PutMapping("/{id}")
    public studentReg updateStudent(@PathVariable Long id, @RequestBody studentReg updatedStudent) {
        return studService.updateStudent(id, updatedStudent);
    }

    @PostMapping("/authenticate")
    public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPswd()));
                final studentReg student = studRepo.findByEmail(authRequest.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("Email not found"));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(authRequest.getEmail(),student.getRoleAsString());
        } else {
            throw new UsernameNotFoundException("invalid user request !");
        }
    }

    @PutMapping("/update/{id}")
    public studentReg updatestudentReg(@PathVariable Long id,@RequestBody studentReg updatedstudentrReg) {
        return studService.updatestudentReg(id,updatedstudentrReg);
    }

    @DeleteMapping("/delete/{id}")
    public void deletestudentReg(@PathVariable Long id) {
        studService.deletestudentReg(id);
    }
}