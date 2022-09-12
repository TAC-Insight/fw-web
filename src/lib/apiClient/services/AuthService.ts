/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationResponse } from '../models/AuthenticationResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { ResendLoginCodeRequest } from '../models/ResendLoginCodeRequest';
import type { VerifyCodeRequest } from '../models/VerifyCodeRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Initiate login process
     * @returns LoginResponse Success
     * @throws ApiError
     */
    public login({
requestBody,
}: {
requestBody?: LoginRequest,
}): CancelablePromise<LoginResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/login',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Verify login code/two factor code and complete login process
     * @returns AuthenticationResponse Success
     * @throws ApiError
     */
    public verifyLoginCode({
requestBody,
}: {
requestBody?: VerifyCodeRequest,
}): CancelablePromise<AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/code',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Resend new login code.  Specify method (Email/Mobile) or leave blank to send to default method
     * @returns AuthenticationResponse Success
     * @throws ApiError
     */
    public resendLoginCode({
requestBody,
}: {
requestBody?: ResendLoginCodeRequest,
}): CancelablePromise<AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/code/resend',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * Verify user session is still valid
     * @returns AuthenticationResponse Success
     * @throws ApiError
     */
    public session(): CancelablePromise<AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/auth/session',
        });
    }

    /**
     * Logout
     * @returns AuthenticationResponse Success
     * @throws ApiError
     */
    public logout(): CancelablePromise<AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/logout',
        });
    }

}
