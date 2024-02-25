import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterModule } from '@angular/router';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { NgxPaginationModule } from 'ngx-pagination';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'country-table',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule 
  ],
  templateUrl: './countryTable.component.html',
  styleUrl: './countryTable.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})



export class CountryTableComponent { 
  @Input()
  public countries: Country[] = [];

  title='Pagination';
  page:number=1;
  count:number=0;
  tableSize: number = 5;
  tableSizes: number[] = [5,10,25,50]

  constructor(){

  }

  onTableDataChange(event: any):void{
    this.page = event;
    this.countries;
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page=1;
    this.countries;
  } 

  
}


