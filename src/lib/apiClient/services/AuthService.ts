/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FWT_Authentication_Models_AuthenticationResponse } from '../models/FWT_Authentication_Models_AuthenticationResponse';
import type { FWT_Authentication_Models_LoginResponse } from '../models/FWT_Authentication_Models_LoginResponse';
import type { FWT_Authentication_Requests_LoginRequest } from '../models/FWT_Authentication_Requests_LoginRequest';
import type { FWT_Authentication_Requests_ResendLoginCodeRequest } from '../models/FWT_Authentication_Requests_ResendLoginCodeRequest';
import type { FWT_Authentication_Requests_VerifyCodeRequest } from '../models/FWT_Authentication_Requests_VerifyCodeRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Initiate login process
     * @returns FWT_Authentication_Models_LoginResponse Success
     * @throws ApiError
     */
    public login({
requestBody,
}: {
requestBody?: FWT_Authentication_Requests_LoginRequest,
}): CancelablePromise<FWT_Authentication_Models_LoginResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Verify login code/two factor code and complete login process
     * @returns FWT_Authentication_Models_AuthenticationResponse Success
     * @throws ApiError
     */
    public verifyLoginCode({
requestBody,
}: {
requestBody?: FWT_Authentication_Requests_VerifyCodeRequest,
}): CancelablePromise<FWT_Authentication_Models_AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/code',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Resend new login code.  Specify method (Email/Mobile) or leave blank to send to default method
     * @returns FWT_Authentication_Models_AuthenticationResponse Success
     * @throws ApiError
     */
    public resendLoginCode({
requestBody,
}: {
requestBody?: FWT_Authentication_Requests_ResendLoginCodeRequest,
}): CancelablePromise<FWT_Authentication_Models_AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/code/resend',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Verify user session is still valid
     * @returns FWT_Authentication_Models_AuthenticationResponse Success
     * @throws ApiError
     */
    public session(): CancelablePromise<FWT_Authentication_Models_AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/session',
        });
    }

    /**
     * Logout
     * @returns FWT_Authentication_Models_AuthenticationResponse Success
     * @throws ApiError
     */
    public logout(): CancelablePromise<FWT_Authentication_Models_AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/logout',
        });
    }

}
