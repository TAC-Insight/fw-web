/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationResponse } from '../models/AuthenticationResponse';
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';
import type { SetPasswordRequest } from '../models/SetPasswordRequest';
import type { TwoFactorRequest } from '../models/TwoFactorRequest';
import type { TwoFactorResponse } from '../models/TwoFactorResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
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
     * @returns TwoFactorResponse Success
     * @throws ApiError
     */
    public twoFactor({
requestBody,
}: {
requestBody?: TwoFactorRequest,
}): CancelablePromise<TwoFactorResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/twofactor',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
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
     * @returns AuthenticationResponse Success
     * @throws ApiError
     */
    public logout(): CancelablePromise<AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/logout',
        });
    }

    /**
     * @returns AuthenticationResponse Success
     * @throws ApiError
     */
    public setPassword({
requestBody,
}: {
requestBody?: SetPasswordRequest,
}): CancelablePromise<AuthenticationResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/auth/password',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

}
