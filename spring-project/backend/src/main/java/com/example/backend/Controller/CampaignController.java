package com.example.backend.Controller;

import com.example.backend.Models.Campaign;
import com.example.backend.Repositories.ICampaignRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
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
    public Optional<Campaign> getCampaignByID(@PathVariable("id") Long id){
        return iCampaignRepo.findById(id);
    }

    @PostMapping("/campaign")
    public void addCampaign(
            @RequestBody Campaign campaign){
        iCampaignRepo.save(campaign);
    }
    @PutMapping("/campaign")
    public void updateCampaign(
            @RequestBody Campaign campaign){
        iCampaignRepo.save(campaign);
    }
}