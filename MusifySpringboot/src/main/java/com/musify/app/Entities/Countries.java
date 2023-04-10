package com.musify.app.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Countries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String iso;

    public Countries() {
    }

    public Countries(long id, String name, String iso ) {
        this.id = id;
        this.name = name;
        this.iso = iso;
    }

    @OneToMany(mappedBy = "country")
    private List<UserApp> users = new ArrayList<>();

    @JsonIgnore
    public List<UserApp> getUsers() {
        return users;
    }

    @JsonSetter
    public void setUsers(List<UserApp> users) {
        this.users = users;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIso() {
        return iso;
    }

    public void setIso(String iso) {
        this.iso = iso;
    }


}
