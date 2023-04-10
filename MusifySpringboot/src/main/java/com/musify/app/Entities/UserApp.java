package com.musify.app.Entities;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static com.fasterxml.jackson.annotation.JsonInclude.Include.NON_DEFAULT;

@Entity
@SuperBuilder
@JsonInclude(NON_DEFAULT)
@Inheritance(strategy = InheritanceType.JOINED)
public class UserApp {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;
    private String userName;
    private String email;
    private String password;
    private String phone;
    private String avatar;
    private Boolean isBanned;
    private Boolean isSubscribed;
    private LocalDateTime createdAt;

    @ManyToOne
    private Countries country;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))

    private List<Role> roles = new ArrayList<>();


    public UserApp() {
    }

    public UserApp(Long id, String userName, String email, String password, String phone, String avatar, Boolean isBanned, Boolean isSubscribed, LocalDateTime createdAt, Countries country, List<Role> roles, List<Payment> payments) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.avatar = avatar;
        this.isBanned = isBanned;
        this.isSubscribed = isSubscribed;
        this.createdAt = createdAt;
        this.country = country;
        this.roles = roles;
        this.payments = payments;
    }

    public List<Role> getRoles() {
        return roles;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public List<Payment> getPayments() {
        return payments;
    }

    public void setPayments(List<Payment> payments) {
        this.payments = payments;
    }

    @OneToMany(mappedBy = "userApp", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private List<Payment> payments;


    public void setId(Long id) {
        this.id = id;
    }
    public Long getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Boolean getBanned() {
        return isBanned;
    }

    public void setBanned(Boolean banned) {
        isBanned = banned;
    }

    public Boolean getSubscribed() {
        return isSubscribed;
    }

    public void setSubscribed(Boolean subscribed) {
        isSubscribed = subscribed;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Countries getCountry() {
        return country;
    }

    public void setCountry(Countries country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return "UserApp{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phone='" + phone + '\'' +
                ", avatar='" + avatar + '\'' +
                ", isBanned=" + isBanned +
                ", isSubscribed=" + isSubscribed +
                ", createdAt=" + createdAt +
                ", country=" + country +
                ", roles=" + roles +
                ", payments=" + payments +
                '}';
    }
}
