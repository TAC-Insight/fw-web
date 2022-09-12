/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserModel = {
    userID: string;
    email: string;
    fullName: string;
    userType: string;
    role: string;
    profileData?: string | null;
    readonly lastLoginDate?: string | null;
    isLockedOut: boolean;
    readonly passwordSetDate?: string | null;
    twoFactorKey?: string | null;
    readonly sessionID?: string | null;
    readonly dateAdded: string;
};
