import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { ApiResponse, ParamData } from '../../../Models/api-response.model';
@Injectable({
    providedIn: 'root',
})
export class ProgramsServiceApi {
    constructor(private http: HttpClient) { }

    protected get baseUrl(): string {
        return `${environment.apiBaseURL}/api/Programs`;
    }
    GetProgramsDetail(body: any): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(`${this.baseUrl}/GetProgramsDetail`, body)
    }
    // AddOrUpdateCompany(body: any): Observable<ApiResponse> {
    //     return this.http.post<ApiResponse>(`${this.baseUrl}/AddOrUpdateCompany`, body);
    // }
    // DeleteCompany(body: any): Observable<ApiResponse> {
    //     return this.http.post<ApiResponse>(`${this.baseUrl}/DeleteCompany`, body);
    // }
}
