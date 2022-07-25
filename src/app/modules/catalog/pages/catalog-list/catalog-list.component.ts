import { Component, OnInit } from '@angular/core';
import { InputFieldComponent } from 'src/app/shared/components/input-field/input-field/input-field.component';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  textSearch = ""
  filterSearch = ""
  constructor() { }

  ngOnInit(): void {
  }
  onSearch(){
    this.filterSearch = this.textSearch
  }
  onClear(){
    this.filterSearch = ""
    this.textSearch = ""
  }

}
