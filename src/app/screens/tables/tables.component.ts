
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Table } from 'src/app/model/Table';
 

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tables!: Table[];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {

    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      //.set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/vnd.ksql.v1+json');

    this.http.post<any>("http://localhost:4200/ksql", {
        ksql: "LIST TABLES;",
        streamsProperties: {}
    }, { 'headers': headers }).subscribe((data: any) => {
      console.log(data);
        this.tables = data[0].tables as Table[];
    });

  }


}
