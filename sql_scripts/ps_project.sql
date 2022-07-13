create database if not exists ps_project_db;
use ps_project_db;

drop table user;
drop table company;
drop table campaign;

create table if not exists user(
	id bigint unique not null,
    first varchar(255) not null,
    last varchar(255) not null,
    username varchar(255) not null,
    password varchar(255) not null,
    primary key(id)
);

create table if not exists company(
	companyid bigint unique not null,
    company_name varchar(255) not null,
    primary key (companyid)
);

CREATE TABLE if not exists `campaign` (
  `campaignid` bigint NOT NULL,
  `campaign_name` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `managerid` bigint NOT NULL,
  PRIMARY KEY (`campaignId`),
  UNIQUE KEY `campaignid` (`campaignid`),
  UNIQUE KEY `managerid` (`managerid`),
  foreign key (managerid) REFERENCES user(id)
)



