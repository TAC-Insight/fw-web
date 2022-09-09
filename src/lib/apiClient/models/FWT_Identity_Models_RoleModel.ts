/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FWT_Identity_Models_RolePermissionModel } from './FWT_Identity_Models_RolePermissionModel';

export type FWT_Identity_Models_RoleModel = {
    roleKey?: number;
    userType: string;
    roleName: string;
    description?: string | null;
    readonly dateCreated?: string;
    readonly createdBy?: string | null;
    readonly dateUpdated?: string | null;
    readonly updatedBy?: string | null;
    rolePermissions?: Array<FWT_Identity_Models_RolePermissionModel> | null;
};
