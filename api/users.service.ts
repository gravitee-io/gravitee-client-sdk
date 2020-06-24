/**
 * Gravitee.io Portal Rest API
 * API dedicated to the devportal part of Gravitee
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@graviteesource.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { ErrorResponse } from '../model/errorResponse';
import { FinalizeRegistrationInput } from '../model/finalizeRegistrationInput';
import { RegisterUserInput } from '../model/registerUserInput';
import { ResetUserPasswordInput } from '../model/resetUserPasswordInput';
import { User } from '../model/user';
import { UsersResponse } from '../model/usersResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


export interface FinalizeUserRegistrationRequestParams {
    FinalizeRegistrationInput?: FinalizeRegistrationInput;
}

export interface GetUserAvatarRequestParams {
    userId: string;
}

export interface GetUsersRequestParams {
    page?: number;
    size?: number;
    q?: string;
}

export interface RegisterNewUserRequestParams {
    RegisterUserInput?: RegisterUserInput;
}

export interface ResetUserPasswordRequestParams {
    ResetUserPasswordInput?: ResetUserPasswordInput;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {

    protected basePath = 'http://localhost:8083/portal/environments/DEFAULT';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Finalize user registration.
     * Create a new user for the portal.  User registration must be enabled. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public finalizeUserRegistration(requestParameters: FinalizeUserRegistrationRequestParams, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public finalizeUserRegistration(requestParameters: FinalizeUserRegistrationRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public finalizeUserRegistration(requestParameters: FinalizeUserRegistrationRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public finalizeUserRegistration(requestParameters: FinalizeUserRegistrationRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const FinalizeRegistrationInput = requestParameters.FinalizeRegistrationInput;

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<User>(`${this.configuration.basePath}/users/registration/_finalize`,
            FinalizeRegistrationInput,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Retrieve a user\&#39;s avatar
     * Retrieve a user\&#39;s avatar. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserAvatar(requestParameters: GetUserAvatarRequestParams, observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    public getUserAvatar(requestParameters: GetUserAvatarRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    public getUserAvatar(requestParameters: GetUserAvatarRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    public getUserAvatar(requestParameters: GetUserAvatarRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const userId = requestParameters.userId;
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserAvatar.');
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'image/_*',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get(`${this.configuration.basePath}/users/${encodeURIComponent(String(userId))}/avatar`,
            {
                responseType: "blob",
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List platform users.
     * List platform users from identity providers.  User must have the MANAGEMENT_USERS[READ] permission. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUsers(requestParameters: GetUsersRequestParams, observe?: 'body', reportProgress?: boolean): Observable<UsersResponse>;
    public getUsers(requestParameters: GetUsersRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UsersResponse>>;
    public getUsers(requestParameters: GetUsersRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UsersResponse>>;
    public getUsers(requestParameters: GetUsersRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const page = requestParameters.page;
        const size = requestParameters.size;
        const q = requestParameters.q;

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (q !== undefined && q !== null) {
            queryParameters = queryParameters.set('q', <any>q);
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.post<UsersResponse>(`${this.configuration.basePath}/users/_search`,
            null,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Register a new user.
     * Register a new user for the portal. As a result, an email is sent with an activation link.  User registration must be enabled.\\ A SMTP server must have been configured. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public registerNewUser(requestParameters: RegisterNewUserRequestParams, observe?: 'body', reportProgress?: boolean): Observable<User>;
    public registerNewUser(requestParameters: RegisterNewUserRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    public registerNewUser(requestParameters: RegisterNewUserRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    public registerNewUser(requestParameters: RegisterNewUserRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const RegisterUserInput = requestParameters.RegisterUserInput;

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<User>(`${this.configuration.basePath}/users/registration`,
            RegisterUserInput,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Reset a user\&#39;s password
     * Send an email with a link so the user with this email can provide a new password. The user must be internally managed and active. 
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public resetUserPassword(requestParameters: ResetUserPasswordRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public resetUserPassword(requestParameters: ResetUserPasswordRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public resetUserPassword(requestParameters: ResetUserPasswordRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public resetUserPassword(requestParameters: ResetUserPasswordRequestParams, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        const ResetUserPasswordInput = requestParameters.ResetUserPasswordInput;

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/users/_reset_password`,
            ResetUserPasswordInput,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
