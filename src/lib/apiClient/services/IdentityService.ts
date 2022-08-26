/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserModel } from '../models/CreateUserModel';
import type { RoleModel } from '../models/RoleModel';
import type { UpdateUserModel } from '../models/UpdateUserModel';
import type { UserModel } from '../models/UserModel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IdentityService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets all users
     * @returns UserModel Success
     * @throws ApiError
     */
    public getUsers(): CancelablePromise<Array<UserModel>> {
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
requestBody?: CreateUserModel,
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
requestBody?: UpdateUserModel,
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
     * @returns RoleModel Success
     * @throws ApiError
     */
    public getRoles(): CancelablePromise<Array<RoleModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/identity/role',
        });
    }

    /**
     * Creates/Updates a role
     * To create a new role, set the role key to zero.  To update an existing role, set the role key to that role's key
     * @returns RoleModel Success
     * @throws ApiError
     */
    public saveRole({
requestBody,
}: {
requestBody?: RoleModel,
}): CancelablePromise<RoleModel> {
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
