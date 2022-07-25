import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InputFieldComponent } from './components/input-field/input-field/input-field.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from'@angular/material/dialog';
import { LabelComponent } from './components/label/label.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { DialogComfirmComponent } from './components/dialog-comfirm/dialog-comfirm.component'
// import {MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatOptionModule, MatPaginatorModule, MatTableModule } from '@angular/material';



@NgModule({
  declarations: [InputFieldComponent, LabelComponent, UploadFileComponent, DialogComfirmComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule
  ],
  exports:[
    InputFieldComponent,
    MatIconModule,
    LabelComponent,
    UploadFileComponent,
    DialogComfirmComponent
  ]
})
export class SharedModule { }
