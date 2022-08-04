package com.example.backend.Repositories;

import com.example.backend.Models.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICampaignRepo extends JpaRepository<Campaign, Long> {


    @Query(value = "Select * from [dbo].[campaign] c " +
            "where c.is_active = 1 and c.banner_id = ?1 " +
            "ORDER BY c.campaign_id DESC", nativeQuery = true)
    public List<Campaign> searchCampaignByIsActive(String bannerId);

    @Query(value = "Select * from [dbo].[campaign] c " +
            "where c.is_active = 0 and c.banner_id = ?1 " +
            "ORDER BY c.campaign_id ASC", nativeQuery = true)
    public List<Campaign> searchCampaignByIsActiveNot(String bannerId);

    @Query(value = "Select * from [dbo].[campaign] where campaign.banner_id = 1", nativeQuery = true)
    public List<Campaign> filterCampaignByFreshDirect();

    @Query(value = "Select * from [dbo].[campaign] where campaign.banner_id = 2", nativeQuery = true)
    public List<Campaign> filterCampaignByFoodLion();

    @Query(value = "Select * from [dbo].[campaign] where campaign.banner_id = 3", nativeQuery = true)
    public List<Campaign> filterCampaignByStopAndShop();

    @Query(value = "Select * from [dbo].[campaign] where campaign.banner_id = 4", nativeQuery = true)
    public List<Campaign> filterCampaignByTheGiantCompany();

    @Query(value = "Select * from [dbo].[campaign] where campaign.banner_id = 5", nativeQuery = true)
    public List<Campaign> filterCampaignByGiant();

    @Query(value = "Select * from [dbo].[campaign] where campaign.banner_id = 6", nativeQuery = true)
    public List<Campaign> filterCampaignByHannaford();
}
