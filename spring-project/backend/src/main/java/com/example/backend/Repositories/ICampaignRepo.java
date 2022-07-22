package com.example.backend.Repositories;

import com.example.backend.Models.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICampaignRepo extends JpaRepository<Campaign, Long> {


    @Query(value = "Select * from [dbo].[campaign] c where c.is_active = 1", nativeQuery = true)
    public List<Campaign> searchCampaignByIsActive();


    @Query(value = "Select * from [dbo].[campaign] c where c.is_active = 0", nativeQuery = true)
    public List<Campaign> searchCampaignByIsActiveNot();
}
