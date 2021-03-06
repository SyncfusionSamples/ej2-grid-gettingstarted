import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {
  public data: Object[];
  public pageSettings: Object;
  public filterSettings: Object;
  constructor() { }

  ngOnInit() {
    this.data = [
      { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
      { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
      { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
      { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
      { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
      { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
      { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
      { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
      { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 },
    ];
    this.pageSettings = { pageSize: 3 };
    this.filterSettings = { type: 'Menu' };
  }

}
