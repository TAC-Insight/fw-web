/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EntityPermission } from './EntityPermission';

export type UserInfo = {
    userID?: string | null;
    tenantID?: string | null;
    email?: string | null;
    fullName?: string | null;
    role?: string | null;
    loginMethod?: string | null;
    sessionPending?: boolean;
    entityPermissions?: Array<EntityPermission> | null;
    applicationPermissions?: Array<string> | null;
};
