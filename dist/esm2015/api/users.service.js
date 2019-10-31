import * as tslib_1 from "tslib";
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
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../variables";
import * as i3 from "../configuration";
let UsersService = class UsersService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://demo.gravitee.io/portal/DEFAULT';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
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
    finalizeUserRegistration(FinalizeRegistrationInput, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.configuration.basePath}/users/registration/_finalize`, FinalizeRegistrationInput, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    getUsers(page, size, observe = 'body', reportProgress = false) {
        let queryParameters = new HttpParams({ encoder: this.encoder });
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', size);
        }
        let headers = this.defaultHeaders;
        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(`${this.configuration.basePath}/users`, {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    registerNewUser(RegisterUserInput, observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        const httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(`${this.configuration.basePath}/users/registration`, RegisterUserInput, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
};
UsersService.ctorParameters = () => [
    { type: HttpClient },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
    { type: Configuration, decorators: [{ type: Optional }] }
];
UsersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UsersService_Factory() { return new UsersService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_PATH, 8), i0.ɵɵinject(i3.Configuration, 8)); }, token: UsersService, providedIn: "root" });
UsersService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional())
], UsersService);
export { UsersService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBvcnRhbC13ZWJjbGllbnQvIiwic291cmNlcyI6WyJhcGkvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDtBQUV2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBMkIsZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFDbkMsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFZLHNCQUFzQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUErQixZQUFZLENBQUM7QUFTL0UsT0FBTyxFQUFFLFNBQVMsRUFBc0IsTUFBMEIsY0FBYyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBMEMsa0JBQWtCLENBQUM7Ozs7O0FBTXJGLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFPckIsWUFBc0IsVUFBc0IsRUFBZ0MsUUFBZ0IsRUFBYyxhQUE0QjtRQUFoSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTGxDLGFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztRQUN2RCxtQkFBYyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBSXZDLElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEs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c3QgQVBJXG4gKiBBUEkgZGVkaWNhdGVkIHRvIHRoZSBkZXZwb3J0YWwgcGFydCBvZiBHcmF2aXRlZVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAzLjAuMFxuICogQ29udGFjdDogY29udGFjdEBncmF2aXRlZXNvdXJjZS5jb21cbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLXVudXNlZC12YXJpYWJsZSBtZW1iZXItb3JkZXJpbmcgKi9cblxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9ICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsXG4gICAgICAgICBIdHRwUmVzcG9uc2UsIEh0dHBFdmVudCwgSHR0cFBhcmFtZXRlckNvZGVjIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ3VzdG9tSHR0cFBhcmFtZXRlckNvZGVjIH0gICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2VuY29kZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWwvZXJyb3JSZXNwb25zZSc7XG5pbXBvcnQgeyBGaW5hbGl6ZVJlZ2lzdHJhdGlvbklucHV0IH0gZnJvbSAnLi4vbW9kZWwvZmluYWxpemVSZWdpc3RyYXRpb25JbnB1dCc7XG5pbXBvcnQgeyBSZWdpc3RlclVzZXJJbnB1dCB9IGZyb20gJy4uL21vZGVsL3JlZ2lzdGVyVXNlcklucHV0JztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbC91c2VyJztcbmltcG9ydCB7IFVzZXJzUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC91c2Vyc1Jlc3BvbnNlJztcblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwOi8vZGVtby5ncmF2aXRlZS5pby9wb3J0YWwvREVGQVVMVCc7XG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpO1xuICAgIHB1YmxpYyBlbmNvZGVyOiBIdHRwUGFyYW1ldGVyQ29kZWM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCwgQE9wdGlvbmFsKClASW5qZWN0KEJBU0VfUEFUSCkgYmFzZVBhdGg6IHN0cmluZywgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmNvZGVyID0gdGhpcy5jb25maWd1cmF0aW9uLmVuY29kZXIgfHwgbmV3IEN1c3RvbUh0dHBQYXJhbWV0ZXJDb2RlYygpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBGaW5hbGl6ZSB1c2VyIHJlZ2lzdHJhdGlvbi5cbiAgICAgKiBDcmVhdGUgYSBuZXcgdXNlciBmb3IgdGhlIHBvcnRhbC4gIFVzZXIgcmVnaXN0cmF0aW9uIG11c3QgYmUgZW5hYmxlZC4gXG4gICAgICogQHBhcmFtIEZpbmFsaXplUmVnaXN0cmF0aW9uSW5wdXQgVXNlZCB0byBmaW5hbGl6ZSBhIHVzZXIgcmVnaXN0cmF0aW9uLlxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBmaW5hbGl6ZVVzZXJSZWdpc3RyYXRpb24oRmluYWxpemVSZWdpc3RyYXRpb25JbnB1dD86IEZpbmFsaXplUmVnaXN0cmF0aW9uSW5wdXQsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8VXNlcj47XG4gICAgcHVibGljIGZpbmFsaXplVXNlclJlZ2lzdHJhdGlvbihGaW5hbGl6ZVJlZ2lzdHJhdGlvbklucHV0PzogRmluYWxpemVSZWdpc3RyYXRpb25JbnB1dCwgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFVzZXI+PjtcbiAgICBwdWJsaWMgZmluYWxpemVVc2VyUmVnaXN0cmF0aW9uKEZpbmFsaXplUmVnaXN0cmF0aW9uSW5wdXQ/OiBGaW5hbGl6ZVJlZ2lzdHJhdGlvbklucHV0LCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXI+PjtcbiAgICBwdWJsaWMgZmluYWxpemVVc2VyUmVnaXN0cmF0aW9uKEZpbmFsaXplUmVnaXN0cmF0aW9uSW5wdXQ/OiBGaW5hbGl6ZVJlZ2lzdHJhdGlvbklucHV0LCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEJhc2ljQXV0aCkgcmVxdWlyZWRcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi51c2VybmFtZSB8fCB0aGlzLmNvbmZpZ3VyYXRpb24ucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh0aGlzLmNvbmZpZ3VyYXRpb24udXNlcm5hbWUgKyAnOicgKyB0aGlzLmNvbmZpZ3VyYXRpb24ucGFzc3dvcmQpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQ29va2llQXV0aCkgcmVxdWlyZWRcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBdO1xuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBDb250ZW50LVR5cGUgaGVhZGVyXG4gICAgICAgIGNvbnN0IGNvbnN1bWVzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBdO1xuICAgICAgICBjb25zdCBodHRwQ29udGVudFR5cGVTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckNvbnRlbnRUeXBlKGNvbnN1bWVzKTtcbiAgICAgICAgaWYgKGh0dHBDb250ZW50VHlwZVNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5wb3N0PFVzZXI+KGAke3RoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aH0vdXNlcnMvcmVnaXN0cmF0aW9uL19maW5hbGl6ZWAsXG4gICAgICAgICAgICBGaW5hbGl6ZVJlZ2lzdHJhdGlvbklucHV0LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdCBwbGF0Zm9ybSB1c2Vycy5cbiAgICAgKiBMaXN0IHBsYXRmb3JtIHVzZXJzLiAgVXNlciBtdXN0IGhhdmUgdGhlIE1BTkFHRU1FTlRfVVNFUlNbUkVBRF0gcGVybWlzc2lvbi4gXG4gICAgICogQHBhcmFtIHBhZ2UgVGhlIHBhZ2UgbnVtYmVyIGZvciBwYWdpbmF0aW9uLlxuICAgICAqIEBwYXJhbSBzaXplIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UgZm9yIHBhZ2luYXRpb24uXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGdldFVzZXJzKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIG9ic2VydmU/OiAnYm9keScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8VXNlcnNSZXNwb25zZT47XG4gICAgcHVibGljIGdldFVzZXJzKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxVc2Vyc1Jlc3BvbnNlPj47XG4gICAgcHVibGljIGdldFVzZXJzKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8VXNlcnNSZXNwb25zZT4+O1xuICAgIHB1YmxpYyBnZXRVc2VycyhwYWdlPzogbnVtYmVyLCBzaXplPzogbnVtYmVyLCBvYnNlcnZlOiBhbnkgPSAnYm9keScsIHJlcG9ydFByb2dyZXNzOiBib29sZWFuID0gZmFsc2UgKTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBsZXQgcXVlcnlQYXJhbWV0ZXJzID0gbmV3IEh0dHBQYXJhbXMoe2VuY29kZXI6IHRoaXMuZW5jb2Rlcn0pO1xuICAgICAgICBpZiAocGFnZSAhPT0gdW5kZWZpbmVkICYmIHBhZ2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVycyA9IHF1ZXJ5UGFyYW1ldGVycy5zZXQoJ3BhZ2UnLCA8YW55PnBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplICE9PSB1bmRlZmluZWQgJiYgc2l6ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gcXVlcnlQYXJhbWV0ZXJzLnNldCgnc2l6ZScsIDxhbnk+c2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgLy8gYXV0aGVudGljYXRpb24gKEJhc2ljQXV0aCkgcmVxdWlyZWRcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi51c2VybmFtZSB8fCB0aGlzLmNvbmZpZ3VyYXRpb24ucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQXV0aG9yaXphdGlvbicsICdCYXNpYyAnICsgYnRvYSh0aGlzLmNvbmZpZ3VyYXRpb24udXNlcm5hbWUgKyAnOicgKyB0aGlzLmNvbmZpZ3VyYXRpb24ucGFzc3dvcmQpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQ29va2llQXV0aCkgcmVxdWlyZWRcbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBdO1xuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8VXNlcnNSZXNwb25zZT4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS91c2Vyc2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIG5ldyB1c2VyLlxuICAgICAqIFJlZ2lzdGVyIGEgbmV3IHVzZXIgZm9yIHRoZSBwb3J0YWwuIEFzIGEgcmVzdWx0LCBhbiBlbWFpbCBpcyBzZW50IHdpdGggYW4gYWN0aXZhdGlvbiBsaW5rLiAgVXNlciByZWdpc3RyYXRpb24gbXVzdCBiZSBlbmFibGVkLlxcXFwgQSBTTVRQIHNlcnZlciBtdXN0IGhhdmUgYmVlbiBjb25maWd1cmVkLiBcbiAgICAgKiBAcGFyYW0gUmVnaXN0ZXJVc2VySW5wdXQgVXNlZCB0byByZWdpc3RlciBhIG5ldyBVc2VyLlxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck5ld1VzZXIoUmVnaXN0ZXJVc2VySW5wdXQ/OiBSZWdpc3RlclVzZXJJbnB1dCwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxVc2VyPjtcbiAgICBwdWJsaWMgcmVnaXN0ZXJOZXdVc2VyKFJlZ2lzdGVyVXNlcklucHV0PzogUmVnaXN0ZXJVc2VySW5wdXQsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxVc2VyPj47XG4gICAgcHVibGljIHJlZ2lzdGVyTmV3VXNlcihSZWdpc3RlclVzZXJJbnB1dD86IFJlZ2lzdGVyVXNlcklucHV0LCBvYnNlcnZlPzogJ2V2ZW50cycsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cEV2ZW50PFVzZXI+PjtcbiAgICBwdWJsaWMgcmVnaXN0ZXJOZXdVc2VyKFJlZ2lzdGVyVXNlcklucHV0PzogUmVnaXN0ZXJVc2VySW5wdXQsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmFzaWNBdXRoKSByZXF1aXJlZFxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnVzZXJuYW1lIHx8IHRoaXMuY29uZmlndXJhdGlvbi5wYXNzd29yZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHRoaXMuY29uZmlndXJhdGlvbi51c2VybmFtZSArICc6JyArIHRoaXMuY29uZmlndXJhdGlvbi5wYXNzd29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChDb29raWVBdXRoKSByZXF1aXJlZFxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpO1xuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8VXNlcj4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS91c2Vycy9yZWdpc3RyYXRpb25gLFxuICAgICAgICAgICAgUmVnaXN0ZXJVc2VySW5wdXQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==