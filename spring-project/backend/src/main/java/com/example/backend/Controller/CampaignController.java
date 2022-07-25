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

    @GetMapping("/active_campaigns")
    public List<Campaign> activeCampaigns(){
        return iCampaignRepo.searchCampaignByIsActive();
    }

    @GetMapping("/archived_campaigns")
    public List<Campaign> archivedCampaigns(){
        return iCampaignRepo.searchCampaignByIsActiveNot();
    }

    @GetMapping("/campaign/{id}")
    public Optional<Campaign> getCampaignByID(@PathVariable("id") Long id){
        return iCampaignRepo.findById(id);
    }

    @GetMapping("/banner/1")
    public List<Campaign> freshDirectCampaigns(){
        return iCampaignRepo.filterCampaignByFreshDirect();
    }

    @GetMapping("/banner/2")
    public List<Campaign> foodLionCampaigns(){
        return iCampaignRepo.filterCampaignByFoodLion();
    }

    @GetMapping("/banner/3")
    public List<Campaign> stopAndShopCampaigns(){
        return iCampaignRepo.filterCampaignByStopAndShop();
    }

    @GetMapping("/banner/4")
    public List<Campaign> theGiantCompanyCampaigns(){
        return iCampaignRepo.filterCampaignByTheGiantCompany();
    }

    @GetMapping("/banner/5")
    public List<Campaign> giantCampaigns(){
        return iCampaignRepo.filterCampaignByGiant();
    }

    @GetMapping("/banner/6")
    public List<Campaign> hannafordCampaigns(){
        return iCampaignRepo.filterCampaignByHannaford();
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