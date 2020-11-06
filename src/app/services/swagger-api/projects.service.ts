/**
 * globy-backend
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent
} from '@angular/common/http';
import { CustomHttpUrlEncodingCodec } from '../../swagger-configs/encoder';

import { Observable } from 'rxjs';

import { Body10 } from '../../models/swagger-model/body10';
import { Body11 } from '../../models/swagger-model/body11';
import { InlineResponse20010 } from '../../models/swagger-model/inlineResponse20010';
import { InlineResponse20011 } from '../../models/swagger-model/inlineResponse20011';
import { InlineResponse20012 } from '../../models/swagger-model/inlineResponse20012';
import { InlineResponse2009 } from '../../models/swagger-model/inlineResponse2009';
import { InlineResponse400 } from '../../models/swagger-model/inlineResponse400';

import { BASE_PATH, COLLECTION_FORMATS } from '../../swagger-configs/variables';
import { Configuration } from '../../swagger-configs/configuration';


@Injectable({ providedIn: 'root' })
export class ProjectsService {

    protected basePath = 'https://api-globy.herokuapp.com/v1';

    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Get a list of projects
     * All the projects of the class
     * @param classId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classesClassIdProjectsGet(classId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<InlineResponse2009>>;
    public classesClassIdProjectsGet(classId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<InlineResponse2009>>>;
    public classesClassIdProjectsGet(classId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<InlineResponse2009>>>;
    public classesClassIdProjectsGet(classId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (classId === null || classId === undefined) {
            throw new Error('Required parameter classId was null or undefined when calling classesClassIdProjectsGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<InlineResponse2009>>('get', `${this.basePath}/classes/${encodeURIComponent(String(classId))}/projects`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Create a new project
     * Create a new project using an array of two classes and sends an invitation to the other classes teacher
     * @param body 
     * @param classId The id of the current class
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classesClassIdProjectsPost(body: Body10, classId: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20010>;
    public classesClassIdProjectsPost(body: Body10, classId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20010>>;
    public classesClassIdProjectsPost(body: Body10, classId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20010>>;
    public classesClassIdProjectsPost(body: Body10, classId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling classesClassIdProjectsPost.');
        }

        if (classId === null || classId === undefined) {
            throw new Error('Required parameter classId was null or undefined when calling classesClassIdProjectsPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let myBody = {
            "class": body._class,
            "initialMessage": body.initialMessage
        }

        return this.httpClient.request<InlineResponse20010>('post', `${this.basePath}/classes/${encodeURIComponent(String(classId))}/projects`,
            {
                body: myBody,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Accept an invitation to a project
     * Accepts an invitation to a project
     * @param classId the class id
     * @param projectId the projectId id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classesClassIdProjectsProjectIdAcceptInvitationPost(classId: string, projectId: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public classesClassIdProjectsProjectIdAcceptInvitationPost(classId: string, projectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public classesClassIdProjectsProjectIdAcceptInvitationPost(classId: string, projectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public classesClassIdProjectsProjectIdAcceptInvitationPost(classId: string, projectId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (classId === null || classId === undefined) {
            throw new Error('Required parameter classId was null or undefined when calling classesClassIdProjectsProjectIdAcceptInvitationPost.');
        }

        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling classesClassIdProjectsProjectIdAcceptInvitationPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('post', `${this.basePath}/classes/${encodeURIComponent(String(classId))}/projects/${encodeURIComponent(String(projectId))}/accept-invitation`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a specific project
     * Returns a project
     * @param classId the class id
     * @param projectId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classesClassIdProjectsProjectIdGet(classId: string, projectId: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20010>;
    public classesClassIdProjectsProjectIdGet(classId: string, projectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20010>>;
    public classesClassIdProjectsProjectIdGet(classId: string, projectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20010>>;
    public classesClassIdProjectsProjectIdGet(classId: string, projectId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (classId === null || classId === undefined) {
            throw new Error('Required parameter classId was null or undefined when calling classesClassIdProjectsProjectIdGet.');
        }

        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling classesClassIdProjectsProjectIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<InlineResponse20010>('get', `${this.basePath}/classes/${encodeURIComponent(String(classId))}/projects/${encodeURIComponent(String(projectId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * get all messages belong to the project
     * get all messages belong to the project
     * @param classId the class id
     * @param projectId the projectId id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classesClassIdProjectsProjectIdMessagesGet(classId: string, projectId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<InlineResponse20011>>;
    public classesClassIdProjectsProjectIdMessagesGet(classId: string, projectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<InlineResponse20011>>>;
    public classesClassIdProjectsProjectIdMessagesGet(classId: string, projectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<InlineResponse20011>>>;
    public classesClassIdProjectsProjectIdMessagesGet(classId: string, projectId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (classId === null || classId === undefined) {
            throw new Error('Required parameter classId was null or undefined when calling classesClassIdProjectsProjectIdMessagesGet.');
        }

        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling classesClassIdProjectsProjectIdMessagesGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<InlineResponse20011>>('get', `${this.basePath}/classes/${encodeURIComponent(String(classId))}/projects/${encodeURIComponent(String(projectId))}/messages`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * add a message
     * add a message
     * @param body 
     * @param classId the class id
     * @param projectId the projectId id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public classesClassIdProjectsProjectIdMessagesPost(body: Body11, classId: string, projectId: string, observe?: 'body', reportProgress?: boolean): Observable<InlineResponse20012>;
    public classesClassIdProjectsProjectIdMessagesPost(body: Body11, classId: string, projectId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InlineResponse20012>>;
    public classesClassIdProjectsProjectIdMessagesPost(body: Body11, classId: string, projectId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InlineResponse20012>>;
    public classesClassIdProjectsProjectIdMessagesPost(body: Body11, classId: string, projectId: string, observe: any = 'body', reportProgress: boolean = false): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling classesClassIdProjectsProjectIdMessagesPost.');
        }

        if (classId === null || classId === undefined) {
            throw new Error('Required parameter classId was null or undefined when calling classesClassIdProjectsProjectIdMessagesPost.');
        }

        if (projectId === null || projectId === undefined) {
            throw new Error('Required parameter projectId was null or undefined when calling classesClassIdProjectsProjectIdMessagesPost.');
        }

        let headers = this.defaultHeaders;

        // authentication (bearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<InlineResponse20012>('post', `${this.basePath}/classes/${encodeURIComponent(String(classId))}/projects/${encodeURIComponent(String(projectId))}/messages`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
