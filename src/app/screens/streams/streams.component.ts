
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Stream } from 'src/app/model/Stream';
import { KsqldbService } from 'src/app/service/ksqldb.service';
 

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  streams!: Stream[];

  constructor(private ksqldb: KsqldbService){

  }

  ngOnInit(): void {

    this.ksqldb.listStreams().subscribe((data: Stream[]) => {
        console.log(data);
        this.streams = data;
    });

  }


}
