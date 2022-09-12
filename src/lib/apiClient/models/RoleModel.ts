/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePermissionModel } from './RolePermissionModel';

export type RoleModel = {
    roleKey?: number;
    userType: string;
    roleName: string;
    description?: string | null;
    readonly dateCreated?: string;
    readonly createdBy?: string | null;
    readonly dateUpdated?: string | null;
    readonly updatedBy?: string | null;
    rolePermissions?: Array<RolePermissionModel> | null;
};
