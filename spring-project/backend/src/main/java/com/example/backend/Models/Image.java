package com.example.backend.Models;


import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;

@Entity
@Table(name = "image")
public class Image {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO, generator="image_seq_gen")
    @SequenceGenerator(name="image_seq_gen", sequenceName="IMAGE_SEQ")
    @Column(name = "imageId", nullable = false)
    private Long imageId;

    @Column(name = "campaignId", nullable = false)
    private Long campaignId;

    @Column(name = "imageUrl", nullable = false)
    private String imageUrl;

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public Long getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(Long campaignId) {
        this.campaignId = campaignId;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
