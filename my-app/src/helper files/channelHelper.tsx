import { Box, Typography } from '@mui/material';
import React from 'react';
import { Campaign } from '../helper files/types';

export const OnSiteOptions = (currentCamp: Campaign) => {
    if(currentCamp.channel == "On-Site") {
        return "On-Site: "+currentCamp.onsiteOptions;}
    else {
        return "";
}};

export const WebLocation = (currentCamp: Campaign) => {
    if(currentCamp.channel == "On-Site") {
        return "Website Location: "+currentCamp.websiteLocation;}
    else {
        return "";
}};

export const TargetAge = (currentCamp: Campaign) => {
    if(currentCamp.channel == "On-Site" || currentCamp.channel == "Off-Site") {
        return "Target Age: "+currentCamp.targetAge;}
    else {
        return "";
}};

export const TargetRegion = (currentCamp: Campaign) => {
    if(currentCamp.channel == "On-Site" || currentCamp.channel == "Off-Site") {
        return "Target Region: "+currentCamp.targetRegion;}
    else {
        return "";
}};

export const SocialMedia = (currentCamp: Campaign) => {
    if(currentCamp.channel == "Off-Site") {
        return "Social Media Platform: "+currentCamp.social;}
    else {
        return "";
}};

export const InStoreOptions = (currentCamp: Campaign) => {
    if(currentCamp.channel == "In-Store") {
        return "In-Store Options: "+currentCamp.instoreOptions;}
    else {
        return "";
}};

export const StoreLocation = (currentCamp: Campaign) => {
    if(currentCamp.channel == "In-Store") {
        return "Store Location: "+currentCamp.storeLocation;}
    else {
        return "";
}};
