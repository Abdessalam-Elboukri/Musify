package com.musify.app.Entities;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String payReference;
    private LocalDateTime payDate;
    @Enumerated(EnumType.STRING)
    private SubcriptionType payType;
    @ManyToOne
    private UserApp userApp;

    public String getPayReference() {
        return payReference;
    }

    public void setPayReference(String payReference) {
        this.payReference = payReference;
    }

    public LocalDateTime getPayDate() {
        return payDate;
    }

    public void setPayDate(LocalDateTime payDate) {
        this.payDate = payDate;
    }

    public SubcriptionType getPayType() {
        return payType;
    }

    public void setPayType(SubcriptionType payType) {
        this.payType = payType;
    }

    public UserApp getUserApp() {
        return userApp;
    }

    public void setUserApp(UserApp userApp) {
        this.userApp = userApp;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
