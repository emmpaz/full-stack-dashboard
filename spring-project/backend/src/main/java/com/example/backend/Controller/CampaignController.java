package com.example.backend.Controller;

import com.example.backend.Models.Campaign;
import com.example.backend.Repositories.ICampaignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CampaignController{

    @Autowired
    ICampaignRepo iCampaignRepo;

    public CampaignController(ICampaignRepo iCampaignRepo){
        this.iCampaignRepo = iCampaignRepo;
    }

    @GetMapping("/campaign")
    public List<Campaign> allCampaigns(){
        return iCampaignRepo.findAll();
    }

    @GetMapping("/campaign/{id}")
    public Campaign getCampaignByID(@PathVariable("id") String id){
        return iCampaignRepo.getReferenceById(Long.valueOf(id));
    }
}