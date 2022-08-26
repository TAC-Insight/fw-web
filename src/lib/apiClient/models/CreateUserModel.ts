/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateUserModel = {
    userID: string;
    email: string;
    fullName: string;
    userType: string;
    role: string;
    password?: string | null;
    passwordResetID?: string | null;
    twoFactorKey?: string | null;
};
