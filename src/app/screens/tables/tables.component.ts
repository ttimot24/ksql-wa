
import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/model/Table';
import { KsqldbService } from 'src/app/service/ksqldb.service';
 

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  tables!: Table[];

  constructor(private ksqldb: KsqldbService){

  }

  ngOnInit(): void {

    this.ksqldb.listStreams().subscribe((data: Table[]) => {
        console.log(data);
        this.tables = data;
    });

  }


}
