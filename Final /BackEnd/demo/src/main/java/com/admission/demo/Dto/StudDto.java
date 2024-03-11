package com.admission.demo.Dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class StudDto {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String FullName;
    private String email;
    private String Mobile;
    private String pswd;
    private String role;
    
    public  StudDto() {
    }
    
    public StudDto(String FullName, String email, String Mobile, String pswd, String role) {
        this.FullName = FullName;
        this.email = email;
        this.Mobile = Mobile;
        this.pswd = pswd;
        this.role = role;
    }
    
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getFullName() {
        return FullName;
    }
    
    public void setFullName(String FullName) {
        this.FullName = FullName;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    public String getMobile() {
        return Mobile;
    }
    
    public void setMobile(String Mobile) {
        this.Mobile = Mobile;
    }
    
    public String getPswd() {
        return pswd;
    }
    
    public void setPswd(String pswd) {
        this.pswd = pswd;
    }
    public String getRole() {
        return role;
    }
    
    public void setRole(String role) {
        this.role = role;
    }

}
