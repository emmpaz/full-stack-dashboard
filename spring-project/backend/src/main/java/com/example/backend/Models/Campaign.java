package com.example.backend.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
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
import javax.persistence.Table;

@Entity
@Table(name = "campaign")
public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "campaignid", nullable = false)
    private Long campaignid;

    @Column(name = "managerid", nullable = false)
    private Long managerid;

    @Column(name = "companyid", nullable = false)
    private Long companyid;

    @Column(name = "campaign_name", nullable = false, columnDefinition = "varchar(255)")
    private String campaignName;

    @Column(name = "start_date", nullable = false, columnDefinition = "DATE")
    private Date startDate;

    @Column(name = "end_date", nullable = false, columnDefinition = "DATE")
    private Date endDate;

    @Column(name = "is_active", nullable = false, columnDefinition = "tinyint")
    private Boolean isActive;
/* 
    @ManyToMany(mappedBy = "manager_id") //maps the user and campaign class via manager_id
    private Set<User> users = new HashSet<>();*/
/* 
    @ManyToOne //maps the company to their campaigns
    @JoinColumn(name = "company_id")
    private Company company;*/

    public Long getCampaignid() {
        return campaignid;
    }

    public void setCampaignid(Long campaignid) {
        this.campaignid = campaignid;
    }

    public Long getManagerid() {
        return managerid;
    }

    public void setManagerid(Long managerid) {
        this.managerid = managerid;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        isActive = active;
    }

    public Long getCampaignId() {
        return campaignid;
    }
    
    public Long getManagerId() {
        return managerid;
    }

    public String getCampaignName() {
        return campaignName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Boolean isActive() {
        return isActive;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setCampaignId(Long id) {
        this.campaignid = id;
    }

    public void setManagerId(Long id) {
        this.managerid = id;
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
    
    public void setActivity(Boolean newActivity) {
        this.isActive = newActivity;
    }
}
