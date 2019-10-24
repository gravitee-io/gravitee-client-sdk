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
var PortalService = /** @class */ (function () {
    function PortalService(httpClient, basePath, configuration) {
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
    PortalService.prototype.configurationGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/configuration", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.prototype.configurationIdentitiesGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/configuration/identities", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.prototype.createTicket = function (ticketInput, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (CookieAuth) required
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.post(this.configuration.basePath + "/tickets", ticketInput, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.prototype.getPictureByViewId = function (viewId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (viewId === null || viewId === undefined) {
            throw new Error('Required parameter viewId was null or undefined when calling getPictureByViewId.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'image/_*',
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/views/" + encodeURIComponent(String(viewId)) + "/picture", {
            responseType: "blob",
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.prototype.getViewByViewId = function (viewId, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (viewId === null || viewId === undefined) {
            throw new Error('Required parameter viewId was null or undefined when calling getViewByViewId.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/views/" + encodeURIComponent(String(viewId)), {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.prototype.getViews = function (page, size, observe, reportProgress) {
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
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/views", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.prototype.infoGet = function (observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            'application/json'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        return this.httpClient.get(this.configuration.basePath + "/info", {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    PortalService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [BASE_PATH,] }] },
        { type: Configuration, decorators: [{ type: Optional }] }
    ]; };
    PortalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PortalService_Factory() { return new PortalService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.BASE_PATH, 8), i0.ɵɵinject(i3.Configuration, 8)); }, token: PortalService, providedIn: "root" });
    PortalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Optional()), tslib_1.__param(1, Inject(BASE_PATH)), tslib_1.__param(2, Optional())
    ], PortalService);
    return PortalService;
}());
export { PortalService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1wb3J0YWwtd2ViY2xpZW50LyIsInNvdXJjZXMiOlsiYXBpL3BvcnRhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsdURBQXVEO0FBRXZELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUEyQixlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUNuQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFFLE1BQVksc0JBQXNCLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQStCLFlBQVksQ0FBQztBQVcvRSxPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQzs7Ozs7QUFNckY7SUFPSSx1QkFBc0IsVUFBc0IsRUFBZ0MsUUFBZ0IsRUFBYyxhQUE0QjtRQUFoSCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBTGxDLGFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztRQUN2RCxtQkFBYyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBSXZDLElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLElBQUksSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUFhTSx3Q0FBZ0IsR0FBdkIsVUFBd0IsT0FBcUIsRUFBRSxjQUErQjtRQUF0RCx3QkFBQSxFQUFBLGdCQUFxQjtRQUFFLCtCQUFBLEVBQUEsc0JBQStCO1FBRTFFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsaUNBQWlDO1FBQ2pDLElBQU0saUJBQWlCLEdBQWE7WUFDaEMsa0JBQWtCO1NBQ3JCLENBQUM7UUFDRixJQUFNLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUcsSUFBSSx3QkFBd0IsS0FBSyxTQUFTLEVBQUU7WUFDeEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDN0Q7UUFHRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUEyQixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsbUJBQWdCLEVBQzVGO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBV00sa0RBQTBCLEdBQWpDLFVBQWtDLE9BQXFCLEVBQUUsY0FBK0I7UUFBdEQsd0JBQUEsRUFBQSxnQkFBcUI7UUFBRSwrQkFBQSxFQUFBLHNCQUErQjtRQUVwRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLGlDQUFpQztRQUNqQyxJQUFNLGlCQUFpQixHQUFhO1lBQ2hDLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsSUFBTSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlHLElBQUksd0JBQXdCLEtBQUssU0FBUyxFQUFFO1lBQ3hDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdEO1FBR0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBcUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLDhCQUEyQixFQUNqSDtZQUNJLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWU7WUFDbkQsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLGNBQWM7U0FDakMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQVlNLG9DQUFZLEdBQW5CLFVBQW9CLFdBQXlCLEVBQUUsT0FBcUIsRUFBRSxjQUErQjtRQUF0RCx3QkFBQSxFQUFBLGdCQUFxQjtRQUFFLCtCQUFBLEVBQUEsc0JBQStCO1FBRWpHLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDNUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUM1SDtRQUNELHVDQUF1QztRQUN2QyxpQ0FBaUM7UUFDakMsSUFBTSxpQkFBaUIsR0FBYTtZQUNoQyxrQkFBa0I7U0FDckIsQ0FBQztRQUNGLElBQU0sd0JBQXdCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RyxJQUFJLHdCQUF3QixLQUFLLFNBQVMsRUFBRTtZQUN4QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUM3RDtRQUdELHVDQUF1QztRQUN2QyxJQUFNLFFBQVEsR0FBYTtZQUN2QixrQkFBa0I7U0FDckIsQ0FBQztRQUNGLElBQU0sdUJBQXVCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekcsSUFBSSx1QkFBdUIsS0FBSyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHVCQUF1QixDQUFDLENBQUM7U0FDbEU7UUFFRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFTLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxhQUFVLEVBQ3JFLFdBQVcsRUFDWDtZQUNJLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWU7WUFDbkQsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLGNBQWM7U0FDakMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQVlNLDBDQUFrQixHQUF6QixVQUEwQixNQUFjLEVBQUUsT0FBcUIsRUFBRSxjQUErQjtRQUF0RCx3QkFBQSxFQUFBLGdCQUFxQjtRQUFFLCtCQUFBLEVBQUEsc0JBQStCO1FBQzVGLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQUMsa0ZBQWtGLENBQUMsQ0FBQztTQUN2RztRQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsaUNBQWlDO1FBQ2pDLElBQU0saUJBQWlCLEdBQWE7WUFDaEMsVUFBVTtZQUNWLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsSUFBTSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlHLElBQUksd0JBQXdCLEtBQUssU0FBUyxFQUFFO1lBQ3hDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdEO1FBR0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsZUFBVSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBVSxFQUMzRztZQUNJLFlBQVksRUFBRSxNQUFNO1lBQ3BCLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWU7WUFDbkQsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLGNBQWM7U0FDakMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQVlNLHVDQUFlLEdBQXRCLFVBQXVCLE1BQWMsRUFBRSxPQUFxQixFQUFFLGNBQStCO1FBQXRELHdCQUFBLEVBQUEsZ0JBQXFCO1FBQUUsK0JBQUEsRUFBQSxzQkFBK0I7UUFDekYsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDekMsTUFBTSxJQUFJLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDO1NBQ3BHO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVsQyxpQ0FBaUM7UUFDakMsSUFBTSxpQkFBaUIsR0FBYTtZQUNoQyxrQkFBa0I7U0FDckIsQ0FBQztRQUNGLElBQU0sd0JBQXdCLEdBQXVCLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM5RyxJQUFJLHdCQUF3QixLQUFLLFNBQVMsRUFBRTtZQUN4QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztTQUM3RDtRQUdELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQVUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLGVBQVUsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFHLEVBQ3pHO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBYU0sZ0NBQVEsR0FBZixVQUFnQixJQUFhLEVBQUUsSUFBYSxFQUFFLE9BQXFCLEVBQUUsY0FBK0I7UUFBdEQsd0JBQUEsRUFBQSxnQkFBcUI7UUFBRSwrQkFBQSxFQUFBLHNCQUErQjtRQUVoRyxJQUFJLGVBQWUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQyxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQU8sSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQyxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQU8sSUFBSSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRWxDLGlDQUFpQztRQUNqQyxJQUFNLGlCQUFpQixHQUFhO1lBQ2hDLGtCQUFrQjtTQUNyQixDQUFDO1FBQ0YsSUFBTSx3QkFBd0IsR0FBdUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlHLElBQUksd0JBQXdCLEtBQUssU0FBUyxFQUFFO1lBQ3hDLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1NBQzdEO1FBR0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBbUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLFdBQVEsRUFDNUU7WUFDSSxNQUFNLEVBQUUsZUFBZTtZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlO1lBQ25ELE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxjQUFjO1NBQ2pDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFXTSwrQkFBTyxHQUFkLFVBQWUsT0FBcUIsRUFBRSxjQUErQjtRQUF0RCx3QkFBQSxFQUFBLGdCQUFxQjtRQUFFLCtCQUFBLEVBQUEsc0JBQStCO1FBRWpFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFbEMsaUNBQWlDO1FBQ2pDLElBQU0saUJBQWlCLEdBQWE7WUFDaEMsa0JBQWtCO1NBQ3JCLENBQUM7UUFDRixJQUFNLHdCQUF3QixHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUcsSUFBSSx3QkFBd0IsS0FBSyxTQUFTLEVBQUU7WUFDeEMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHdCQUF3QixDQUFDLENBQUM7U0FDN0Q7UUFHRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFVLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxVQUFPLEVBQ2xFO1lBQ0ksZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDOztnQkF6UmlDLFVBQVU7NkNBQUcsUUFBUSxZQUFHLE1BQU0sU0FBQyxTQUFTO2dCQUErQyxhQUFhLHVCQUF2QyxRQUFROzs7SUFQOUYsYUFBYTtRQUh6QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBUWlELG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUMsbUJBQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBLEVBQW9CLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BUGhHLGFBQWEsQ0FrU3pCO3dCQXBVRDtDQW9VQyxBQWxTRCxJQWtTQztTQWxTWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHcmF2aXRlZS5pbyBQb3J0YWwgUmVzdCBBUElcbiAqIEFQSSBkZWRpY2F0ZWQgdG8gdGhlIGRldnBvcnRhbCBwYXJ0IG9mIEdyYXZpdGVlXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDMuMC4wXG4gKiBDb250YWN0OiBjb250YWN0QGdyYXZpdGVlc291cmNlLmNvbVxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyxcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwUGFyYW1ldGVyQ29kZWMgfSAgICAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMgfSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vZW5jb2Rlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbmZpZ3VyYXRpb25JZGVudGl0aWVzUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC9jb25maWd1cmF0aW9uSWRlbnRpdGllc1Jlc3BvbnNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25SZXNwb25zZSB9IGZyb20gJy4uL21vZGVsL2NvbmZpZ3VyYXRpb25SZXNwb25zZSc7XG5pbXBvcnQgeyBFcnJvclJlc3BvbnNlIH0gZnJvbSAnLi4vbW9kZWwvZXJyb3JSZXNwb25zZSc7XG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi4vbW9kZWwvaW5mbyc7XG5pbXBvcnQgeyBUaWNrZXRJbnB1dCB9IGZyb20gJy4uL21vZGVsL3RpY2tldElucHV0JztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuLi9tb2RlbC92aWV3JztcbmltcG9ydCB7IFZpZXdzUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbC92aWV3c1Jlc3BvbnNlJztcblxuaW1wb3J0IHsgQkFTRV9QQVRILCBDT0xMRUNUSU9OX0ZPUk1BVFMgfSAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3ZhcmlhYmxlcyc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29uZmlndXJhdGlvbic7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUG9ydGFsU2VydmljZSB7XG5cbiAgICBwcm90ZWN0ZWQgYmFzZVBhdGggPSAnaHR0cDovL2RlbW8uZ3Jhdml0ZWUuaW8vcG9ydGFsL0RFRkFVTFQnO1xuICAgIHB1YmxpYyBkZWZhdWx0SGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oKTtcbiAgICBwdWJsaWMgZW5jb2RlcjogSHR0cFBhcmFtZXRlckNvZGVjO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsIEBPcHRpb25hbCgpQEluamVjdChCQVNFX1BBVEgpIGJhc2VQYXRoOiBzdHJpbmcsIEBPcHRpb25hbCgpIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJhc2VQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5iYXNlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmNvZGVyIHx8IG5ldyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMoKTtcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHBvcnRhbCBjb25maWd1cmF0aW9uLlxuICAgICAqIEdldCBhbGwgdGhlIHBvcnRhbCBjb25maWd1cmF0aW9uIGZyb20gdGhlIHBsYXRmb3JtIHNldHRpbmdzLiBcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbkdldChvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRpb25SZXNwb25zZT47XG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25HZXQob2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPENvbmZpZ3VyYXRpb25SZXNwb25zZT4+O1xuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uR2V0KG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Q29uZmlndXJhdGlvblJlc3BvbnNlPj47XG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25HZXQob2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmRlZmF1bHRIZWFkZXJzO1xuXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB0aGUgQWNjZXB0IGhlYWRlclxuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgaWYgKGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBoZWFkZXJzID0gaGVhZGVycy5zZXQoJ0FjY2VwdCcsIGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuZ2V0PENvbmZpZ3VyYXRpb25SZXNwb25zZT4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS9jb25maWd1cmF0aW9uYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRlbnRpdHkgcHJvdmlkZXIgbGlzdC5cbiAgICAgKiBHZXQgYWxsIHRoZSBpZGVudGl0eSBwcm92aWRlcnMgdGhhdCBjYW4gdXNlZCBpbiB0aGUgcG9ydGFsLiBcbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbklkZW50aXRpZXNHZXQob2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxDb25maWd1cmF0aW9uSWRlbnRpdGllc1Jlc3BvbnNlPjtcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbklkZW50aXRpZXNHZXQob2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPENvbmZpZ3VyYXRpb25JZGVudGl0aWVzUmVzcG9uc2U+PjtcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbklkZW50aXRpZXNHZXQob2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxDb25maWd1cmF0aW9uSWRlbnRpdGllc1Jlc3BvbnNlPj47XG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb25JZGVudGl0aWVzR2V0KG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxDb25maWd1cmF0aW9uSWRlbnRpdGllc1Jlc3BvbnNlPihgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9L2NvbmZpZ3VyYXRpb24vaWRlbnRpdGllc2AsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSB0aWNrZXQuXG4gICAgICogQ3JlYXRlIGEgdGlja2V0LiBUaGlzIHRpY2tldCBjYW4gYWltIDogICAqIGEgc3BlY2lmaWMgYXBwbGljYXRpb24gICAqIGEgc3BlY2lmaWMgQVBJICAgKiB0aGUgZ3Jhdml0ZWUgcG9ydGFsICBVc2VyIG11c3QgYmUgYXV0aGVudGljYXRlZCB0byB1c2UgdGhpcyBzZXJ2aWNlLiBcbiAgICAgKiBAcGFyYW0gdGlja2V0SW5wdXQgYSBuZXcgdGlja2V0IHRvIGNyZWF0ZVxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVUaWNrZXQodGlja2V0SW5wdXQ/OiBUaWNrZXRJbnB1dCwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHB1YmxpYyBjcmVhdGVUaWNrZXQodGlja2V0SW5wdXQ/OiBUaWNrZXRJbnB1dCwgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+O1xuICAgIHB1YmxpYyBjcmVhdGVUaWNrZXQodGlja2V0SW5wdXQ/OiBUaWNrZXRJbnB1dCwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcbiAgICBwdWJsaWMgY3JlYXRlVGlja2V0KHRpY2tldElucHV0PzogVGlja2V0SW5wdXQsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyBhdXRoZW50aWNhdGlvbiAoQmFzaWNBdXRoKSByZXF1aXJlZFxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnVzZXJuYW1lIHx8IHRoaXMuY29uZmlndXJhdGlvbi5wYXNzd29yZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKHRoaXMuY29uZmlndXJhdGlvbi51c2VybmFtZSArICc6JyArIHRoaXMuY29uZmlndXJhdGlvbi5wYXNzd29yZCkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGF1dGhlbnRpY2F0aW9uIChDb29raWVBdXRoKSByZXF1aXJlZFxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIENvbnRlbnQtVHlwZSBoZWFkZXJcbiAgICAgICAgY29uc3QgY29uc3VtZXM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBDb250ZW50VHlwZVNlbGVjdGVkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQ29udGVudFR5cGUoY29uc3VtZXMpO1xuICAgICAgICBpZiAoaHR0cENvbnRlbnRUeXBlU2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdDb250ZW50LVR5cGUnLCBodHRwQ29udGVudFR5cGVTZWxlY3RlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LnBvc3Q8YW55PihgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9L3RpY2tldHNgLFxuICAgICAgICAgICAgdGlja2V0SW5wdXQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcGljdHVyZSBvZiBhIFZpZXdcbiAgICAgKiBHZXQgdGhlIHBpY3R1cmUgb2YgYSB2aWV3LiBcbiAgICAgKiBAcGFyYW0gdmlld0lkIElkIG9mIGEgVmlldy5cbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UGljdHVyZUJ5Vmlld0lkKHZpZXdJZDogc3RyaW5nLCBvYnNlcnZlPzogJ2JvZHknLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEJsb2I+O1xuICAgIHB1YmxpYyBnZXRQaWN0dXJlQnlWaWV3SWQodmlld0lkOiBzdHJpbmcsIG9ic2VydmU/OiAncmVzcG9uc2UnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxCbG9iPj47XG4gICAgcHVibGljIGdldFBpY3R1cmVCeVZpZXdJZCh2aWV3SWQ6IHN0cmluZywgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxCbG9iPj47XG4gICAgcHVibGljIGdldFBpY3R1cmVCeVZpZXdJZCh2aWV3SWQ6IHN0cmluZywgb2JzZXJ2ZTogYW55ID0gJ2JvZHknLCByZXBvcnRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGlmICh2aWV3SWQgPT09IG51bGwgfHwgdmlld0lkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZWQgcGFyYW1ldGVyIHZpZXdJZCB3YXMgbnVsbCBvciB1bmRlZmluZWQgd2hlbiBjYWxsaW5nIGdldFBpY3R1cmVCeVZpZXdJZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2ltYWdlL18qJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBdO1xuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQoYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS92aWV3cy8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmlld0lkKSl9L3BpY3R1cmVgLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJibG9iXCIsXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLmNvbmZpZ3VyYXRpb24ud2l0aENyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBWaWV3XG4gICAgICogR2V0IGEgc3BlY2lmaWMgdmlldy4gXG4gICAgICogQHBhcmFtIHZpZXdJZCBJZCBvZiBhIFZpZXcuXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGdldFZpZXdCeVZpZXdJZCh2aWV3SWQ6IHN0cmluZywgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxWaWV3PjtcbiAgICBwdWJsaWMgZ2V0Vmlld0J5Vmlld0lkKHZpZXdJZDogc3RyaW5nLCBvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Vmlldz4+O1xuICAgIHB1YmxpYyBnZXRWaWV3QnlWaWV3SWQodmlld0lkOiBzdHJpbmcsIG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8Vmlldz4+O1xuICAgIHB1YmxpYyBnZXRWaWV3QnlWaWV3SWQodmlld0lkOiBzdHJpbmcsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBpZiAodmlld0lkID09PSBudWxsIHx8IHZpZXdJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmVkIHBhcmFtZXRlciB2aWV3SWQgd2FzIG51bGwgb3IgdW5kZWZpbmVkIHdoZW4gY2FsbGluZyBnZXRWaWV3QnlWaWV3SWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuZGVmYXVsdEhlYWRlcnM7XG5cbiAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRzOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICBdO1xuICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuY29uZmlndXJhdGlvbi5zZWxlY3RIZWFkZXJBY2NlcHQoaHR0cEhlYWRlckFjY2VwdHMpO1xuICAgICAgICBpZiAoaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGhlYWRlcnMgPSBoZWFkZXJzLnNldCgnQWNjZXB0JywgaHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5nZXQ8Vmlldz4oYCR7dGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRofS92aWV3cy8ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmlld0lkKSl9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIFZpZXcgbGlzdFxuICAgICAqIEdldCBhbGwgdmlld3Mgb2YgdGhlIHBsYXRmb3JtLiBcbiAgICAgKiBAcGFyYW0gcGFnZSBUaGUgcGFnZSBudW1iZXIgZm9yIHBhZ2luYXRpb24uXG4gICAgICogQHBhcmFtIHNpemUgVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZSBmb3IgcGFnaW5hdGlvbi5cbiAgICAgKiBAcGFyYW0gb2JzZXJ2ZSBzZXQgd2hldGhlciBvciBub3QgdG8gcmV0dXJuIHRoZSBkYXRhIE9ic2VydmFibGUgYXMgdGhlIGJvZHksIHJlc3BvbnNlIG9yIGV2ZW50cy4gZGVmYXVsdHMgdG8gcmV0dXJuaW5nIHRoZSBib2R5LlxuICAgICAqIEBwYXJhbSByZXBvcnRQcm9ncmVzcyBmbGFnIHRvIHJlcG9ydCByZXF1ZXN0IGFuZCByZXNwb25zZSBwcm9ncmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Vmlld3MocGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgb2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxWaWV3c1Jlc3BvbnNlPjtcbiAgICBwdWJsaWMgZ2V0Vmlld3MocGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgb2JzZXJ2ZT86ICdyZXNwb25zZScsIHJlcG9ydFByb2dyZXNzPzogYm9vbGVhbik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPFZpZXdzUmVzcG9uc2U+PjtcbiAgICBwdWJsaWMgZ2V0Vmlld3MocGFnZT86IG51bWJlciwgc2l6ZT86IG51bWJlciwgb2JzZXJ2ZT86ICdldmVudHMnLCByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxWaWV3c1Jlc3BvbnNlPj47XG4gICAgcHVibGljIGdldFZpZXdzKHBhZ2U/OiBudW1iZXIsIHNpemU/OiBudW1iZXIsIG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBxdWVyeVBhcmFtZXRlcnMgPSBuZXcgSHR0cFBhcmFtcyh7ZW5jb2RlcjogdGhpcy5lbmNvZGVyfSk7XG4gICAgICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQgJiYgcGFnZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJzID0gcXVlcnlQYXJhbWV0ZXJzLnNldCgncGFnZScsIDxhbnk+cGFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUgIT09IHVuZGVmaW5lZCAmJiBzaXplICE9PSBudWxsKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnMgPSBxdWVyeVBhcmFtZXRlcnMuc2V0KCdzaXplJywgPGFueT5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxWaWV3c1Jlc3BvbnNlPihgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9L3ZpZXdzYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMuY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgICAgICAgICBvYnNlcnZlOiBvYnNlcnZlLFxuICAgICAgICAgICAgICAgIHJlcG9ydFByb2dyZXNzOiByZXBvcnRQcm9ncmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBwb3J0YWwgaW5mb3JtYXRpb24uXG4gICAgICogR2V0IHNvbWUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBvcnRhbCAodmVyc2lvbiwgLi4uKS4gXG4gICAgICogQHBhcmFtIG9ic2VydmUgc2V0IHdoZXRoZXIgb3Igbm90IHRvIHJldHVybiB0aGUgZGF0YSBPYnNlcnZhYmxlIGFzIHRoZSBib2R5LCByZXNwb25zZSBvciBldmVudHMuIGRlZmF1bHRzIHRvIHJldHVybmluZyB0aGUgYm9keS5cbiAgICAgKiBAcGFyYW0gcmVwb3J0UHJvZ3Jlc3MgZmxhZyB0byByZXBvcnQgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgcHVibGljIGluZm9HZXQob2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxJbmZvPjtcbiAgICBwdWJsaWMgaW5mb0dldChvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8SW5mbz4+O1xuICAgIHB1YmxpYyBpbmZvR2V0KG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8SW5mbz4+O1xuICAgIHB1YmxpYyBpbmZvR2V0KG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSApOiBPYnNlcnZhYmxlPGFueT4ge1xuXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICAvLyB0byBkZXRlcm1pbmUgdGhlIEFjY2VwdCBoZWFkZXJcbiAgICAgICAgY29uc3QgaHR0cEhlYWRlckFjY2VwdHM6IHN0cmluZ1tdID0gW1xuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGh0dHBIZWFkZXJBY2NlcHRTZWxlY3RlZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdGhpcy5jb25maWd1cmF0aW9uLnNlbGVjdEhlYWRlckFjY2VwdChodHRwSGVhZGVyQWNjZXB0cyk7XG4gICAgICAgIGlmIChodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaGVhZGVycyA9IGhlYWRlcnMuc2V0KCdBY2NlcHQnLCBodHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50LmdldDxJbmZvPihgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9L2luZm9gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICAgICAgICAgIG9ic2VydmU6IG9ic2VydmUsXG4gICAgICAgICAgICAgICAgcmVwb3J0UHJvZ3Jlc3M6IHJlcG9ydFByb2dyZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=