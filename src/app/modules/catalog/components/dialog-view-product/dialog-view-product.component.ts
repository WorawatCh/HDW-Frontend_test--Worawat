import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputFieldComponent } from 'src/app/shared/components/input-field/input-field/input-field.component';
import { CatalogListModel } from '../../model/catalog.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dialog-view-product',
  templateUrl: './dialog-view-product.component.html',
  styleUrls: ['./dialog-view-product.component.scss']
})
export class DialogViewProductComponent implements OnInit {
 form: CatalogListModel = new CatalogListModel();
  acceptImageType = ".jpg,.jpeg,.png,.tiff,.gif";
  maxFileSize: number = 5 * 1024 * 1024;
  imagePath = ""
  @ViewChild('productName') productName: InputFieldComponent;
  @ViewChild('productPrice') productPrice: InputFieldComponent;

  constructor(
    public dialogRef: MatDialogRef<DialogViewProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _sanitizer: DomSanitizer
  ) {
    console.log("data",data)
    this.form = data.form
    // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    //              + toReturnImage.base64string);
   }
  ngOnInit() {
  }
  onChangeFilePartDealer(event: any){
    console.log("event",event)
    // this.form.catalogPicture.push(event.file)
  }

  onClose(){
     this.dialogRef.close({ action: 0 });
  }

  onConfirm(){
       this.dialogRef.close({ action: 1})
  }
}
