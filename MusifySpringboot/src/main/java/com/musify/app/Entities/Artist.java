package com.musify.app.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Artist extends UserApp{

    private String artistReference;
    private ArtistCategory artistCategory;
    private Boolean isArtist;

    @OneToMany(mappedBy = "artist", cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private List<Album> albumList;

    @ManyToMany
    private List<Feat> featList = new ArrayList<>();

    public String getArtistReference() {
        return artistReference;
    }

    public void setArtistReference(String artistReference) {
        this.artistReference = artistReference;
    }

    public ArtistCategory getArtistCategory() {
        return artistCategory;
    }

    public void setArtistCategory(ArtistCategory artistCategory) {
        this.artistCategory = artistCategory;
    }

    public Boolean getArtist() {
        return isArtist;
    }

    public void setArtist(Boolean artist) {
        isArtist = artist;
    }

    public List<Album> getAlbumList() {
        return albumList;
    }

    public void setAlbumList(List<Album> albumList) {
        this.albumList = albumList;
    }

    @JsonIgnore
    public List<Feat> getFeatList() {
        return featList;
    }

    @JsonSetter
    public void setFeatList(List<Feat> featList) {
        this.featList = featList;
    }
}
