/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUserModel = {
    userID: string;
    fullName: string;
    email: string;
    mobile?: string | null;
    loginMethod: string;
    userType: string;
    role: string;
    twoFactorKey?: string | null;
};
