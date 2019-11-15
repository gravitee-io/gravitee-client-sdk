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
import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortalNotificationsResponse } from '../model/portalNotificationsResponse';
import { User } from '../model/user';
import { Configuration } from '../configuration';
export interface DeleteCurrentUserNotificationByNotificationIdRequestParams {
    notificationId: string;
}
export interface GetCurrentUserNotificationsRequestParams {
    page?: number;
    size?: number;
}
export interface UpdateCurrentUserRequestParams {
    User?: User;
}
export declare class UserService {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string, configuration: Configuration);
    /**
     * Delete all notifications of the current user
     * Delete all notifications of the current user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteAllCurrentUserNotifications(observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteAllCurrentUserNotifications(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteAllCurrentUserNotifications(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Delete a specific notification of the current user
     * Delete a specific notification of the current user.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe?: 'body', reportProgress?: boolean): Observable<any>;
    deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    deleteCurrentUserNotificationByNotificationId(requestParameters: DeleteCurrentUserNotificationByNotificationIdRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    /**
     * Get the authenticated user
     * Get information about the authenticated user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCurrentUser(observe?: 'body', reportProgress?: boolean): Observable<User>;
    getCurrentUser(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    getCurrentUser(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
    /**
     * Retrieve user\&#39;s avatar
     * Retrieve user\&#39;s avatar.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCurrentUserAvatar(observe?: 'body', reportProgress?: boolean): Observable<Blob>;
    getCurrentUserAvatar(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Blob>>;
    getCurrentUserAvatar(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Blob>>;
    /**
     * Retrieve user\&#39;s notifications
     * Retrieve current user\&#39;s notifications.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe?: 'body', reportProgress?: boolean): Observable<PortalNotificationsResponse>;
    getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PortalNotificationsResponse>>;
    getCurrentUserNotifications(requestParameters: GetCurrentUserNotificationsRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PortalNotificationsResponse>>;
    /**
     * Modify current user information.
     * Modify current user information.  Only the current user can modify his/her information.
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe?: 'body', reportProgress?: boolean): Observable<User>;
    updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<User>>;
    updateCurrentUser(requestParameters: UpdateCurrentUserRequestParams, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<User>>;
}
