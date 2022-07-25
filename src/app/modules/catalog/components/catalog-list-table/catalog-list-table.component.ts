import { DialogCreateProductComponent } from './../dialog-create-product/dialog-create-product.component';
import { DialogEditProductComponent } from './../dialog-edit-product/dialog-edit-product.component';
import { CatalogListModel } from './../../model/catalog.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog'
import {ImageFiles } from "src/app/shared/models/upload-file.model";
import { DialogViewProductComponent } from '../dialog-view-product/dialog-view-product.component';
import { DialogComfirmComponent } from 'src/app/shared/components/dialog-comfirm/dialog-comfirm.component';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-catalog-list-table',
  templateUrl: './catalog-list-table.component.html',
  styleUrls: ['./catalog-list-table.component.scss']
})
export class CatalogListTableComponent implements OnInit {
  @Input("textSearch") textSearch: "";

  dataSource = new MatTableDataSource<CatalogListModel>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Paging
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  countPage = 0;
  skip = 0;
  from = 0;
  to = 0;
  currentPage = 0
  active_sort = "";
  direction_sort = "";
  dataMockUp  = []
  
  

  public displayedColumns: string[] = [
    "edit",
    "delete",
   "no",
   "catalogName",
   "catalogId",
   "catalogPrice",
   "catalogDetail",
   "viewDetail"
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    
  ) {
  
  }
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log("sort",this.sort)
  }

  ngOnInit() {
    this.mockUp()
    this.getDataTable();
    
  }
   ngOnChanges(value) {
    if(value.textSearch){
      if(value.textSearch.currentValue){
        this.dataSource.data =  this.dataMockUp.filter(xx => xx.catalogName === value.textSearch.currentValue);
        this.dataSource._updateChangeSubscription();
        this.length = this.dataSource.data.length;
      } else{
         this.getDataTable();
      }
    
    }
  }
  onSelect(event,index){
    let dataList = []
    let dataJson ={
      index : index,
      checked: event.checked
    }
    dataList.push(dataJson)
    console.log("test",dataList)
  }


  getDataTable() {
      const ELEMENT_DATA: CatalogListModel[] = this.dataMockUp;
        this.dataSource = new MatTableDataSource<CatalogListModel>(ELEMENT_DATA);
  }

  // sortData(event) {
  //   if (event.direction == "") {
  //     this.active_sort = "";
  //     this.direction_sort = "";
  //   } else {
  //     this.active_sort = event.active;
  //     this.direction_sort = event.direction;
  //   }
  //    if (this.dataSource.data.length > 0) {
  //     this.getDataTable();
  //     // console.log("test Sort", this.active_sort, this.direction_sort);
  //   }
  //   return;
  // }

  onRedirect(url: string[]): void {
    this.router.navigate(url);
  }
   onChangePage(event) {
    console.log(event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    // this.getDataTable();
  }
  onCreateProduct(){
    this.dialog.open(DialogCreateProductComponent, {
      data: { },
      closeOnNavigation: true
    }).afterClosed().subscribe(result => {
      if(result.action == 1){
         console.log("result",result.data)
        result.data.catalogId = ""
        this.dataMockUp.push(result.data)
        this.getDataTable()
      }
    })
  }
  onEditProduct(index){
    const dataEdit = this.dataMockUp[index]
     this.dialog.open(DialogEditProductComponent, {
      data: { 
        form: dataEdit
      },
      closeOnNavigation: true
    }).afterClosed().subscribe(result => {
      if(result.action == 1){
        console.log("result",result.data)
        this.dataMockUp[index]=result.data
        this.getDataTable()
      }
    })
  }
   onViewProduct(index){
    const dataEdit = this.dataMockUp[index]
     this.dialog.open(DialogViewProductComponent, {
      data: { 
        form: dataEdit
      },
      closeOnNavigation: true
    }).afterClosed().subscribe(result => {
    })
  }
  onDeleteProduct(index){
      this.dialog
      .open(DialogComfirmComponent, {
        data: {},
        closeOnNavigation: true,
        autoFocus: false,
        disableClose: true
      })
      .afterClosed()
      .subscribe(result => {
        if (result == 1) {
          this.dataMockUp.splice(index,1)
          this.getDataTable()
        }
      });
  }

  mockUp(){
    this.dataMockUp = [
      {
      rowNo : 1,
      catalogId :"ctg001",
      catalogName : "กรรไกร",
      catalogPrice : 15,
      catalogDetail :"ใช้ตัด",
      },
       {
      rowNo : 2,
      catalogId :"ctg002",
      catalogName : "มีด",
      catalogPrice : 20,
      catalogDetail :"ใช้ฟัน, กรีด",
      },
       {
      rowNo : 3,
      catalogId :"ctg003",
      catalogName : "คัตเตอร์",
      catalogPrice : 25,
      catalogDetail :"ใช้กรีด",
      },
       {
      rowNo : 4,
      catalogId :"ctg004",
      catalogName : "โต๊ะ",
      catalogPrice : 690,
      catalogDetail :"ใช้วางสิ่งของ",
      },
       {
      rowNo : 5,
      catalogId :"ctg005",
      catalogName : "เสื้อ",
      catalogPrice : 250,
      catalogDetail :"ใช้สวมใส่",
      },
       {
      rowNo : 6,
      catalogId :"ctg006",
      catalogName : "กางเกง",
      catalogPrice : 300,
      catalogDetail :"ใช้สวมใส่",
      },
       {
      rowNo : 7,
      catalogId :"ctg007",
      catalogName : "atk kit",
      catalogPrice : 59,
      catalogDetail :"ใช้ตรวจโควิด",
      },
       {
      rowNo : 8,
      catalogId :"ctg008",
      catalogName : "TV",
      catalogPrice : 6990,
      catalogDetail :"ใช้ตัด",
      },
       {
      rowNo : 8,
      catalogId :"ctg009",
      catalogName : "ปากกา",
      catalogPrice : "15",
      catalogDetail :"ใช้เขียน",
      },
       {
      rowNo : 10,
      catalogId :"ctg0010",
      catalogName : "Netflix",
      catalogPrice : "350",
      catalogDetail :"ใช้ดูสื่อบันเทิง",
      },
    ]
    this.dataMockUp.forEach(element => {
      element.catalogPicture = []
    });
    console.log("test",this.dataMockUp)
  }
  
}

