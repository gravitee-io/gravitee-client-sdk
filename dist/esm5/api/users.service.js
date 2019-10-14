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
var UsersService = /** @class */ (function () {
    function UsersService(httpClient, basePath, configuration) {
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
    UsersService.prototype.getUsers = function (page, size, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var queryParameters = new HttpParams({ encoder: this.encoder });
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', size);
        }
        var headers = this.defaultHeaders;
        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/users", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    UsersService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: Optional }] }
    ]; };
    UsersService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UsersService_Factory() { return new UsersService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_PATH, 8), i0.ɵɵinject(i3.Configuration, 8)); }, token: UsersService, providedIn: "root" });
    UsersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional())
    ], UsersService);
    return UsersService;
}());
export { UsersService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXBvcnRhbC13ZWJjbGllbnQvIiwic291cmNlcyI6WyJhcGkvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDtBQUV2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBMkIsZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFDbkMsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxNQUFZLHNCQUFzQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUErQixZQUFZLENBQUM7QUFNL0UsT0FBTyxFQUFFLFNBQVMsRUFBc0IsTUFBMEIsY0FBYyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBMEMsa0JBQWtCLENBQUM7Ozs7O0FBTXJGO0lBT0ksc0JBQXNCLFVBQXNCLEVBQWdDLFFBQWdCLEVBQWMsYUFBNEI7UUFBaEgsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUxsQyxhQUFRLEdBQUcsd0NBQXdDLENBQUM7UUFDdkQsbUJBQWMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUl2QyxJQUFJLGFBQWEsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNqRCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDOUIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUI7WUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7U0FDMUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxJQUFJLElBQUksd0JBQXdCLEVBQUUsQ0FBQztJQUNoRixDQUFDO0lBZU0sK0JBQVEsR0FBZixVQUFnQixJQUFhLEVBQUUsSUFBYSxFQUFFLE9BQXFCLEVBQUUsY0FBK0I7UUFBdEQsd0JBQUEsRUFBQSxnQkFBcUI7UUFBRSwrQkFBQSxFQUFBLHNCQUErQjtRQUVoRyxJQUFJLGVBQWUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQyxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQU8sSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQyxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQU8sSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLHNDQUFzQztRQUN0QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO1lBQzVELE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDNUg7UUFDRCxpQ0FBaUM7UUFDakMsSUFBTSxpQkFBaUIsR0FBYTtZQUNoQyxrQkFBa0I7U0FDckIsQ0FBQztRQUNGLElBQU0sd0JBQXdCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RyxJQUFJLHdCQUF3QixLQUFLLFNBQVMsRUFBRTtZQUN4QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUM3RDtRQUdELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxXQUFRLEVBQzVFO1lBQ0ksTUFBTSxFQUFFLGVBQWU7WUFDdkIsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDOztnQkE3RGlDLFVBQVU7NkNBQUcsUUFBUSxZQUFHLE1BQU0sU0FBQyxTQUFTO2dCQUErQyxhQUFhLHVCQUF2QyxRQUFROzs7SUFQOUYsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBUWlELG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUMsbUJBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBLEVBQW9CLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BUGhHLFlBQVksQ0FzRXhCO3VCQW5HRDtDQW1HQyxBQXRFRCxJQXNFQztTQXRFWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHcmF2aXRlZS5pbyBQb3J0YWwgUmVzdCBBUElcbiAqIEFQSSBkZWRpY2F0ZWQgdG8gdGhlIGRldnBvcnRhbCBwYXJ0IG9mIEdyYXZpdGVlXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDMuMC4wXG4gKiBDb250YWN0OiBjb250YWN0QGdyYXZpdGVlc291cmNlLmNvbVxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyxcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwUGFyYW1ldGVyQ29kZWMgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vZW5jb2Rlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEVycm9yUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9lcnJvclJlc3BvbnNlJztcbmltcG9ydCB7IFVzZXJzUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC91c2Vyc1Jlc3BvbnNlJztcblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwOi8vZGVtby5ncmF2aXRlZS5pby9wb3J0YWwvREVGQVVMVCc7XG4gICAgcHVibGljIGRlZmF1bHRIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbigpO1xuICAgIHB1YmxpYyBlbmNvZGVyOiBIdHRwUGFyYW1ldGVyQ29kZWM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCwgQE9wdGlvbmFsKClASW5qZWN0KEJBU0VfUEFUSCkgYmFzZVBhdGg6IHN0cmluZywgQE9wdGlvbmFsKCkgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbikge1xuICAgICAgICBpZiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uID0gY29uZmlndXJhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYmFzZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgYmFzZVBhdGggPSB0aGlzLmJhc2VQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmNvZGVyID0gdGhpcy5jb25maWd1cmF0aW9uLmVuY29kZXIgfHwgbmV3IEN1c3RvbUh0dHBQYXJhbWV0ZXJDb2RlYygpO1xuICAgIH1cblxuXG5cbiAgICAvKipcbiAgICAgKiBMaXN0IHBsYXRmb3JtIHVzZXJzLlxuICAgICAqIExpc3QgcGxhdGZvcm0gdXNlcnMuICBVc2VyIG11c3QgaGF2ZSB0aGUgTUFOQUdFTUVOVF9VU0VSU1tSRUFEXSBwZXJtaXNzaW9uLiBcbiAgICAgKiBAcGFyYW0gcGFnZSBUaGUgcGFnZSBudW1iZXIgZm9yIHBhZ2luYXRpb24uXG4gICAgICogQHBhcmFtIHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSBmb3IgcGFnaW5hdGlvbi5cbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VXNlcnMocGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxVc2Vyc1Jlc3BvbnNlPjtcbiAgICBwdWJsaWMgZ2V0VXNlcnMocGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFVzZXJzUmVzcG9uc2U+PjtcbiAgICBwdWJsaWMgZ2V0VXNlcnMocGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxVc2Vyc1Jlc3BvbnNlPj47XG4gICAgcHVibGljIGdldFVzZXJzKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBxdWVyeVBhcmFtZXRlcnMgPSBuZXcgSHR0cFBhcmFtcyh7ZW5jb2RlcjogdGhpcy5lbmNvZGVyfSk7XG4gICAgICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQgJiYgcGFnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gcXVlcnlQYXJhbWV0ZXJzLnNldCgncGFnZScsIDxhbnk+cGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCAmJiBzaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCdzaXplJywgPGFueT5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmFzaWNBdXRoKSByZXF1aXJlZFxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnVzZXJuYW1lIHx8IHRoaXMuY29uZmlndXJhdGlvbi5wYXNzd29yZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHRoaXMuY29uZmlndXJhdGlvbi51c2VybmFtZSArICc6JyArIHRoaXMuY29uZmlndXJhdGlvbi5wYXNzd29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PFVzZXJzUmVzcG9uc2U+KGAke3RoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aH0vdXNlcnNgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=