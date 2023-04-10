package com.musify.app.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Track {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String trackName;
    private String trackReference;
    private String trackUrl;
    private String trackAvatar;
    private LocalDateTime createAt;
    @ManyToOne
    private Album album;

    @ManyToMany
    private List<PlayList> playLists = new ArrayList<>();

    @JsonIgnore
    public List<PlayList> getPlayLists() {
        return playLists;
    }

    @JsonIgnore
    public void setPlayLists(List<PlayList> playLists) {
        this.playLists = playLists;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTrackName() {
        return trackName;
    }

    public void setTrackName(String trackName) {
        this.trackName = trackName;
    }

    public String getTrackReference() {
        return trackReference;
    }

    public void setTrackReference(String trackReference) {
        this.trackReference = trackReference;
    }

    public String getTrackUrl() {
        return trackUrl;
    }

    public void setTrackUrl(String trackUrl) {
        this.trackUrl = trackUrl;
    }

    public String getTrackAvatar() {
        return trackAvatar;
    }

    public void setTrackAvatar(String trackAvatar) {
        this.trackAvatar = trackAvatar;
    }

    public LocalDateTime getCreateAt() {
        return createAt;
    }

    public void setCreateAt(LocalDateTime createAt) {
        this.createAt = createAt;
    }

    @JsonIgnore
    public Album getAlbum() {
        return album;
    }
    @JsonSetter
    public void setAlbum(Album album) {
        this.album = album;
    }

}
