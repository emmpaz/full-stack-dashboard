package com.example.backend.Repositories;

import com.example.backend.Models.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface IImageRepo extends JpaRepository<Image, Long> {

    @Query(value="Select i.image_url from [dbo].[image] i " +
            "where i.campaign_id = ?1", nativeQuery = true)
    public List<String> getImagesWithCampaignId(String campaignId);
}
