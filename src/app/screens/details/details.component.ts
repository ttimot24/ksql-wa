import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  dataType!: string | null;
  dataName!: string | null;

  data: any;

  constructor(private route: ActivatedRoute, private http: HttpClient){

  }

  ngOnInit(): void {

    this.dataType = this.route.snapshot.paramMap.get('type');
    this.dataName = this.route.snapshot.paramMap.get('name');

    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      //.set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/vnd.ksql.v1+json');

    this.http.post<any>(environment.REST_API_BASE+"/ksql", {
        ksql: "DESCRIBE "+this.dataName?.toUpperCase()+" EXTENDED;",
        streamsProperties: {}
    }, { 'headers': headers }).subscribe((data: any) => {
      
      console.log(data);

      this.data = data[0];
        
    });

  }

}
