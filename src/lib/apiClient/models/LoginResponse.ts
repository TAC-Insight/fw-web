/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TenantInfo } from './TenantInfo';
import type { UserInfo } from './UserInfo';

export type LoginResponse = {
    success?: boolean;
    message?: string | null;
    sessionID?: string | null;
    userInfo?: UserInfo;
    tenantInfo?: TenantInfo;
};
