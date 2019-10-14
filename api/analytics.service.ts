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

import { DateHistoAnalytics, GroupByAnalytics, CountAnalytics } from '../model/models';
import { ErrorResponse } from '../model/errorResponse';
import { Log } from '../model/log';
import { LogsResponse } from '../model/logsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

    protected basePath = 'http://demo.gravitee.io/portal/DEFAULT';
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
     * Export application logs as CSV
     * Export application logs as CSV.  User must have the APPLICATION_LOG[READ] permission.
     * @param applicationId Id of an application.
     * @param page The page number for pagination.
     * @param size The number of items per page for pagination.
     * @param from Lower bound of timestamp for filtering.
     * @param to Upper bound of timestamp for filtering. Must be greater than *from* query param.
     * @param query Query used for filtering.
     * @param field Field used for filtering. **required** when type is **GROUP_BY**.
     * @param order Order used to sort the result list.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exportApplicationLogsByApplicationId(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe?: 'body', reportProgress?: boolean): Observable<string>;
    public exportApplicationLogsByApplicationId(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public exportApplicationLogsByApplicationId(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public exportApplicationLogsByApplicationId(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling exportApplicationLogsByApplicationId.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }
        if (field !== undefined && field !== null) {
            queryParameters = queryParameters.set('field', <any>field);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', <any>order);
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.post<string>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/logs/_export`,
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
     * Get Application analytics
     * Get the application analytics.  User must have the APPLICATION_ANALYTICS[READ] permission.
     * @param applicationId Id of an application.
     * @param page The page number for pagination.
     * @param size The number of items per page for pagination.
     * @param from Lower bound of timestamp for filtering.
     * @param to Upper bound of timestamp for filtering. Must be greater than *from* query param.
     * @param interval Interval for time search. Must be &gt;&#x3D; 1 000 and &lt;&#x3D; 1 000 000 000.
     * @param query Query used for filtering.
     * @param field Field used for filtering. **required** when type is **GROUP_BY**.
     * @param type Type of analytics that is expected :   - GROUP_BY :       Used to group total hits by a specific field (Application, Status, Path, ...).\\       Query params :       - from       - to       - interval       - query       - field       - order       - ranges   - DATE_HISTO :        Used to retrieve total hits per range of time, on a specific time interval.\\       Query params :       - from       - to       - interval       - query       - aggs   - COUNT :        Used to retrieve total hits, on a specific time interval.\\       Query params :       - from       - to       - interval       - query
     * @param range Used with GROUP_BY type only.  A semicolon separated list of \&quot;from:to\&quot; elements. **_/!\\\\ Different from *from* and *to* query params**
     * @param aggs Used with DATE_HISTO type only.  A semicolon separated list of \&quot;type:field\&quot; elements. **_/!\\\\ Different from *type* and *field* query params**\\ Type can be **FIELD**, **AVG**, **MIN**, **MAX**
     * @param order Used with GROUP_BY type only.   A colon separated list of \&quot;type:field\&quot; elements. **_/!\\\\ Different from *type* and *field* query params**\\ By default, sort is ASC. If *type* starts with \&#39;-\&#39;, the order sort is DESC.\\ Currently, only **AVG** is supported.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationAnalytics(applicationId: string, page?: number, size?: number, from?: number, to?: number, interval?: number, query?: string, field?: string, type?: 'GROUP_BY' | 'DATE_HISTO' | 'COUNT', range?: string, aggs?: string, order?: string, observe?: 'body', reportProgress?: boolean): Observable<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>;
    public getApplicationAnalytics(applicationId: string, page?: number, size?: number, from?: number, to?: number, interval?: number, query?: string, field?: string, type?: 'GROUP_BY' | 'DATE_HISTO' | 'COUNT', range?: string, aggs?: string, order?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>>;
    public getApplicationAnalytics(applicationId: string, page?: number, size?: number, from?: number, to?: number, interval?: number, query?: string, field?: string, type?: 'GROUP_BY' | 'DATE_HISTO' | 'COUNT', range?: string, aggs?: string, order?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>>;
    public getApplicationAnalytics(applicationId: string, page?: number, size?: number, from?: number, to?: number, interval?: number, query?: string, field?: string, type?: 'GROUP_BY' | 'DATE_HISTO' | 'COUNT', range?: string, aggs?: string, order?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling getApplicationAnalytics.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (interval !== undefined && interval !== null) {
            queryParameters = queryParameters.set('interval', <any>interval);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }
        if (field !== undefined && field !== null) {
            queryParameters = queryParameters.set('field', <any>field);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (range !== undefined && range !== null) {
            queryParameters = queryParameters.set('range', <any>range);
        }
        if (aggs !== undefined && aggs !== null) {
            queryParameters = queryParameters.set('aggs', <any>aggs);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', <any>order);
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<DateHistoAnalytics | GroupByAnalytics | CountAnalytics>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/analytics`,
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
     * Get a specific log of an application
     * Get a specific log of an application.  User must have the APPLICATION_LOG[READ] permission.
     * @param applicationId Id of an application.
     * @param logId Id of a log.
     * @param timestamp Used to select the right index
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationLogByApplicationIdAndLogId(applicationId: string, logId: string, timestamp?: number, observe?: 'body', reportProgress?: boolean): Observable<Log>;
    public getApplicationLogByApplicationIdAndLogId(applicationId: string, logId: string, timestamp?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Log>>;
    public getApplicationLogByApplicationIdAndLogId(applicationId: string, logId: string, timestamp?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Log>>;
    public getApplicationLogByApplicationIdAndLogId(applicationId: string, logId: string, timestamp?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling getApplicationLogByApplicationIdAndLogId.');
        }
        if (logId === null || logId === undefined) {
            throw new Error('Required parameter logId was null or undefined when calling getApplicationLogByApplicationIdAndLogId.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (timestamp !== undefined && timestamp !== null) {
            queryParameters = queryParameters.set('timestamp', <any>timestamp);
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Log>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/logs/${encodeURIComponent(String(logId))}`,
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
     * Get Application logs
     * Get the application logs.  User must have the APPLICATION_LOG[READ] permission.
     * @param applicationId Id of an application.
     * @param page The page number for pagination.
     * @param size The number of items per page for pagination.
     * @param from Lower bound of timestamp for filtering.
     * @param to Upper bound of timestamp for filtering. Must be greater than *from* query param.
     * @param query Query used for filtering.
     * @param field Field used for filtering. **required** when type is **GROUP_BY**.
     * @param order Order used to sort the result list.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getApplicationLogs(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe?: 'body', reportProgress?: boolean): Observable<LogsResponse>;
    public getApplicationLogs(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<LogsResponse>>;
    public getApplicationLogs(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<LogsResponse>>;
    public getApplicationLogs(applicationId: string, page?: number, size?: number, from?: number, to?: number, query?: string, field?: string, order?: 'ASC' | 'DESC', observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (applicationId === null || applicationId === undefined) {
            throw new Error('Required parameter applicationId was null or undefined when calling getApplicationLogs.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('page', <any>page);
        }
        if (size !== undefined && size !== null) {
            queryParameters = queryParameters.set('size', <any>size);
        }
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('query', <any>query);
        }
        if (field !== undefined && field !== null) {
            queryParameters = queryParameters.set('field', <any>field);
        }
        if (order !== undefined && order !== null) {
            queryParameters = queryParameters.set('order', <any>order);
        }

        let headers = this.defaultHeaders;

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<LogsResponse>(`${this.configuration.basePath}/applications/${encodeURIComponent(String(applicationId))}/logs`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
