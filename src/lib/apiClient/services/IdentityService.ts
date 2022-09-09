/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Identity_Models_CreateUserModel } from '../models/FWT_Identity_Models_CreateUserModel';
import type { FWT_Identity_Models_RoleModel } from '../models/FWT_Identity_Models_RoleModel';
import type { FWT_Identity_Models_UpdateUserModel } from '../models/FWT_Identity_Models_UpdateUserModel';
import type { FWT_Identity_Models_UserModel } from '../models/FWT_Identity_Models_UserModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IdentityService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all users
     * @returns FWT_Identity_Models_UserModel Success
     * @throws ApiError
     */
    public getUsers(): CancelablePromise<Array<FWT_Identity_Models_UserModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/identity/user',
        });
    }

    /**
     * Creates a user
     * Password or password reset ID must be supplied
     * @returns any Success
     * @throws ApiError
     */
    public createUser({
requestBody,
}: {
requestBody?: FWT_Identity_Models_CreateUserModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/identity/user',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Updates a user
     * To change a user's password set the password field.  Leaving the password field blank will retain the current password
     * @returns any Success
     * @throws ApiError
     */
    public updateUser({
requestBody,
}: {
requestBody?: FWT_Identity_Models_UpdateUserModel,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/identity/user',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Gets all roles
     * @returns FWT_Identity_Models_RoleModel Success
     * @throws ApiError
     */
    public getRoles(): CancelablePromise<Array<FWT_Identity_Models_RoleModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/identity/role',
        });
    }

    /**
     * Creates/Updates a role
     * To create a new role, set the role key to zero.  To update an existing role, set the role key to that role's key
     * @returns FWT_Identity_Models_RoleModel Success
     * @throws ApiError
     */
    public saveRole({
requestBody,
}: {
requestBody?: FWT_Identity_Models_RoleModel,
}): CancelablePromise<FWT_Identity_Models_RoleModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/identity/role',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Deletes a role by key
     * @returns any Success
     * @throws ApiError
     */
    public deleteRole({
roleKey,
}: {
roleKey: number,
}): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/identity/role/{roleKey}',
            path: {
                'roleKey': roleKey,
            },
        });
    }

    /**
     * Gets all role permission types
     * @returns string Success
     * @throws ApiError
     */
    public getPermissionTypes(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/identity/role/permission/type',
        });
    }

    /**
     * Gets all entity role permission names
     * @returns string Success
     * @throws ApiError
     */
    public getEntityPermissionNames(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/identity/role/permission/entity',
        });
    }

    /**
     * Gets all entity role permission values
     * @returns string Success
     * @throws ApiError
     */
    public getEntityPermissionValues(): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/identity/role/permission/entity/value',
        });
    }

}
