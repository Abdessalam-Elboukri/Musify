package com.musify.app.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Album {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String albumName ;
    private String albumRefrence;
    private String albumAvatar;
    private Boolean is_private;
    @ManyToOne
    private Artist artist;

    @OneToMany(mappedBy = "album")
    private List<Track> trackList= new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAlbumName() {
        return albumName;
    }

    public void setAlbumName(String albumName) {
        this.albumName = albumName;
    }

    public String getAlbumRefrence() {
        return albumRefrence;
    }

    public void setAlbumRefrence(String albumRefrence) {
        this.albumRefrence = albumRefrence;
    }

    public String getAlbumAvatar() {
        return albumAvatar;
    }

    public void setAlbumAvatar(String albumAvatar) {
        this.albumAvatar = albumAvatar;
    }

    @JsonIgnore
    public Artist getArtist() {
        return artist;
    }

    @JsonSetter
    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public Boolean getIs_private() {
        return is_private;
    }

    public void setIs_private(Boolean is_private) {
        this.is_private = is_private;
    }

    public List<Track> getTrackList() {
        return trackList;
    }

    public void setTrackList(List<Track> trackList) {
        this.trackList = trackList;
    }
}
