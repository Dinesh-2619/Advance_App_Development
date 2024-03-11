package com.admission.demo.Service;

import com.admission.demo.Model.studentReg;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.admission.demo.Repository.studRepo;

import java.util.List;
import java.util.Optional;

@Service
public class studService {

    @Autowired
    private studRepo studRepo;

    public List<studentReg> getAllStudents() {
        return studRepo.findAll();
    }
    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<studentReg> getstudentRegById(Long id) {
        return studRepo.findById(id);
    }

    public studentReg createstudentReg(studentReg studentReg) {
        return studRepo.save(studentReg);
    }
    public studentReg saveLogin(studentReg login) {
        login.setPswd(passwordEncoder.encode(login.getPswd()));
        return studRepo.save(login);
    }
    public studentReg updateStudent(Long id, studentReg updatedStudent) {
        Optional<studentReg> existingStudentOptional = studRepo.findById(id);
        if (existingStudentOptional.isPresent()) {
            studentReg existingStudent = existingStudentOptional.get();
            existingStudent.setFullName(updatedStudent.getFullName());
            existingStudent.setEmail(updatedStudent.getEmail());
            existingStudent.setPswd(updatedStudent.getPswd());
            existingStudent.setMobile(updatedStudent.getMobile());
            existingStudent.setRole(updatedStudent.getRole());
            return studRepo.save(existingStudent);
        } else {
            throw new RuntimeException("Student not found with id: " + id);
        }
    }

    public studentReg updatestudentReg(Long id, studentReg updatedstudentReg) {
        Optional<studentReg> studentReg = studRepo.findById(id);
        if (studentReg.isPresent()) {
            updatedstudentReg.setId(id);
            return studRepo.save(updatedstudentReg);
        } else {
            throw new RuntimeException("student not found");
        }
    }

    public void deletestudentReg(Long id) {
        studRepo.deleteById(id);
    }
}