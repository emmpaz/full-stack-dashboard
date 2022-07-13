package com.example.backend.Repositories;

import com.example.backend.Models.Campaign;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICampaignRepo extends JpaRepository<Campaign, Long> {
}
