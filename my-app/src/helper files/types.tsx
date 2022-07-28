
export type Campaign = {
    managerId: number;
    banner: String;
    bannerId: number;
    channel: String;
    company: String;
    budget: number;
    campaignName: String;
    startDate: Date;
    endDate: Date;
    isActive: Boolean;

    social: String;
    targetAge: String;
    targetRegion: String;
    onsiteOptions: String;
    websiteLocation: String;
    instoreOptions: String;
    storeLocation: String;
}

export type User = {
    firstname: String;
    lastname: String;
    username: String;
    password: String;
}