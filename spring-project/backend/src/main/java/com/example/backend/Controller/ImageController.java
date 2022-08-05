package com.example.backend.Controller;


import com.example.backend.Models.Image;
import com.example.backend.Repositories.IImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ImageController {

    @Autowired
    IImageRepo iImageRepo;

    public ImageController(IImageRepo iImageRepo){
        this.iImageRepo = iImageRepo;
    }

    @PostMapping("/images")
    public void addImage(@RequestBody Image image){
        iImageRepo.save(image);
    }

    @GetMapping("/images/{campaignId}")
    public List<String> getImagesWithCampaignId(
            @PathVariable("campaignId") String campaignId){
        return iImageRepo.getImagesWithCampaignId(campaignId);
    }
}
