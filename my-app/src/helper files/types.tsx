
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
}

export type User = {
    firstname: String;
    lastname: String;
    username: String;
    password: String;
}