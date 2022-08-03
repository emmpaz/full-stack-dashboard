package com.example.backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "campaign")
public class Campaign {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO, generator="campaign_seq_gen")
    @SequenceGenerator(name="campaign_seq_gen", sequenceName="CAMPAIGN_SEQ")
    @Column(name = "campaignId", nullable = false)
    private Long campaignId;

    @Column(name = "managerId", nullable = false)
    private Long managerId;

    @Column(name = "banner", columnDefinition = "varchar(255)")
    private String banner;

    @Column(name = "bannerId", nullable = false)
    private int bannerId;

    @Column(name = "company", columnDefinition = "varchar(255)")
    private String company;

    @Column(name = "channel", columnDefinition = "varchar(255)") //only options: on-site, off-site, in-store
    private String channel;

    //off-site options
    @Column(name = "social", columnDefinition = "varchar(255)") //options: facebook, instagram, twitter, youtube
    private String social;
    
    @Column(name = "targetAge", columnDefinition = "varchar(255)") //for off and on-site
    private String targetAge;
 
    @Column(name = "targetRegion", columnDefinition = "varchar(255)") //for off and on-site
    private String targetRegion;

    //on-site options
    @Column(name = "onsiteOptions", columnDefinition = "varchar(255)") 
    private String onsiteOptions;

    @Column(name = "websiteLocation", columnDefinition = "varchar(255)")
    private String websiteLocation;

    @Column(name = "copy", columnDefinition = "text")
    private String copy;

    public String getWebsiteLocation() {
        return websiteLocation;
    }

    public void setWebsiteLocation(String websiteLocation) {
        this.websiteLocation = websiteLocation;
    }

    //in-store options
    @Column(name = "instoreOptions", columnDefinition = "varchar(255)")
    private String instoreOptions;

    public String getInstoreOptions() {
        return instoreOptions;
    }

    public void setInstoreOptions(String instoreOptions) {
        this.instoreOptions = instoreOptions;
    }

    @Column(name = "storeLocation", columnDefinition = "varchar(255)")
    private String storeLocation;

    public String getStoreLocation() {
        return storeLocation;
    }

    public void setStoreLocation(String storeLocation) {
        this.storeLocation = storeLocation;
    }

    @Column(name = "budget")
    private Double budget;

    @Column(name = "campaign_name", columnDefinition = "varchar(255)")
    private String campaignName;

    @Column(name = "start_date", columnDefinition = "DATE")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startDate;

    @Column(name = "end_date", columnDefinition = "DATE")
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date endDate;

    @Column(name = "is_active", columnDefinition = "tinyint")
    private Boolean isActive;
/* 
    @ManyToMany(mappedBy = "manager_id") //maps the user and campaign class via manager_id
    private Set<User> users = new HashSet<>();*/
/* 
    @ManyToOne //maps the company to their campaigns
    @JoinColumn(name = "company_id")
    private Company company;*/

    public int getBannerId() {
        return bannerId;
    }

    public void setBannerId(int id) {
        this.bannerId = id;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getCopy() {
        return copy;
    }

    public void setCopy(String copy) {
        this.copy = copy;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getChannel() {
        return channel;
    }

    public void setChannel(String channel) {
        this.channel = channel;
    }

    public Double getBudget() {
        return budget;
    }

    public void setBudget(Double budget) {
        this.budget = budget;
    }

    public Long getCampaignId() {
        return campaignId;
    }

    public void setCampaignId(Long campaignid) {
        this.campaignId = campaignid;
    }

    public Long getManagerId() {
        return managerId;
    }

    public void setManagerId(Long managerid) {
        this.managerId = managerid;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean active) {
        isActive = active;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setCampaignName(String name) {
        this.campaignName = name;
    }

    public void setStartDate(Date date) {
        this.startDate = date;
    }

    public void setEndDate(Date date) {
        this.endDate = date;
    }

    public String getSocial() {
        return social;
    }

    public void setSocial(String social) {
        this.social = social;
    }

    public String getTargetAge() {
        return targetAge;
    }

    public void setTargetAge(String targetAge) {
        this.targetAge = targetAge;
    }

    public String getTargetRegion() {
        return targetRegion;
    }

    public void setTargetRegion(String targetRegion) {
        this.targetRegion = targetRegion;
    }

    public String getOnsiteOptions() {
        return onsiteOptions;
    }

    public void setOnsiteOptions(String onsiteOptions) {
        this.onsiteOptions = onsiteOptions;
    }
    
}
