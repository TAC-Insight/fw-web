/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_Domain_Models_EntityPermission } from './FWT_Domain_Models_EntityPermission';

export type FWT_Authentication_Models_UserInfo = {
    userID?: string | null;
    tenantID?: string | null;
    email?: string | null;
    fullName?: string | null;
    role?: string | null;
    loginMethod?: string | null;
    sessionPending?: boolean;
    entityPermissions?: Array<FWT_Domain_Models_EntityPermission> | null;
    applicationPermissions?: Array<string> | null;
};
