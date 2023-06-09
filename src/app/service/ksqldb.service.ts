import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, EMPTY, tap, of, catchError, map } from 'rxjs';
import { Stream } from "../model/Stream";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class KsqldbService {

  constructor(private http: HttpClient){

  }

  public listStreams(): Observable<Stream[]>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*')
    .set('Accept', 'application/vnd.ksql.v1+json');

    return this.http.post<any>(environment.REST_API_BASE+"/ksql", {
        ksql: "LIST STREAMS;",
        streamsProperties: {}
    }, { 'headers': headers }).pipe(
        map((response: any) => {
            return response[0].streams as Stream[];
          }),
          catchError((error) => {
            return of(error.error);
      })
    );
  }


  public listTables(): Observable<Stream[]>{
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    //.set('Access-Control-Allow-Origin', '*')
    .set('Accept', 'application/vnd.ksql.v1+json');

    return this.http.post<any>(environment.REST_API_BASE+"/ksql", {
        ksql: "LIST TABLES;",
        streamsProperties: {}
    }, { 'headers': headers }).pipe(
        map((response: any) => {
            return response[0].tables as Stream[];
          }),
          catchError((error) => {
            return of(error.error);
      })
    );
  }

}
