/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_Authentication_Models_TenantInfo } from './FWT_Authentication_Models_TenantInfo';
import type { FWT_Authentication_Models_UserInfo } from './FWT_Authentication_Models_UserInfo';

export type FWT_Authentication_Models_LoginResponse = {
    success?: boolean;
    failure?: string | null;
    message?: string | null;
    sessionID?: string | null;
    userInfo?: FWT_Authentication_Models_UserInfo;
    tenantInfo?: FWT_Authentication_Models_TenantInfo;
};
