
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Stream } from 'src/app/model/Stream';
 

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  streams!: Stream[];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {

    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      //.set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/vnd.ksql.v1+json');

    this.http.post<any>("http://localhost:4200/ksql", {
        ksql: "LIST STREAMS;",
        streamsProperties: {}
    }, { 'headers': headers }).subscribe((data: any) => {
      console.log(data);
        this.streams = data[0].streams as Stream[];
    });

  }


}
