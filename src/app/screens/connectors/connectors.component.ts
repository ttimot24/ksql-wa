
import { Component, OnInit } from '@angular/core';
import { Connector } from 'src/app/model/Connector';
import { KsqldbService } from 'src/app/service/ksqldb.service';

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.scss']
})
export class ConnectorsComponent {

  connectors!: Connector[];

  constructor(private ksqldb: KsqldbService){

  }

  ngOnInit(): void {

    this.ksqldb.listConnectors().subscribe((data: Connector[]) => {
        console.log(data);
        this.connectors = data;
    });

  }

}
