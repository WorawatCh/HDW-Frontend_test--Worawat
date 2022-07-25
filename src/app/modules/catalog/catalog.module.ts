import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogListComponent } from './pages/catalog-list/catalog-list.component';
import {MatCardModule} from '@angular/material/card'
import { SharedModule } from 'src/app/shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogListTableComponent } from './components/catalog-list-table/catalog-list-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from'@angular/material/dialog';
import { DialogCreateProductComponent } from './components/dialog-create-product/dialog-create-product.component';
import { DialogEditProductComponent } from './components/dialog-edit-product/dialog-edit-product.component';
import { DialogViewProductComponent } from './components/dialog-view-product/dialog-view-product.component'
import {MatSortModule} from '@angular/material/sort'
import {MatCheckboxModule} from'@angular/material/checkbox'



@NgModule({
  declarations: [CatalogListComponent, CatalogListTableComponent, DialogCreateProductComponent, DialogEditProductComponent, DialogViewProductComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MatCardModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule,
    MatCheckboxModule,

  ]
})
export class CatalogModule { }
