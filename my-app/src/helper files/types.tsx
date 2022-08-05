
export type Campaign = {
    managerId: number;
    banner: string;
    bannerId: number;
    channel: string;
    company: string;
    budget: number;
    campaignName: string;
    startDate: Date;
    endDate: Date;
    isActive: Boolean;

    social: string;
    targetAge: string;
    targetRegion: string;
    onsiteOptions: string;
    websiteLocation: string;
    instoreOptions: string;
    storeLocation: string;
    copy: string;
}

export type User = {
    firstname: String;
    lastname: String;
    username: String;
    password: String;
}

export type CampImage = {
    campaignId: number;
    imageUrl: string;
}