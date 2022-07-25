import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InputFieldComponent } from 'src/app/shared/components/input-field/input-field/input-field.component';
import { CatalogListModel } from '../../model/catalog.model';

@Component({
  selector: 'app-dialog-create-product',
  templateUrl: './dialog-create-product.component.html',
  styleUrls: ['./dialog-create-product.component.scss']
})
export class DialogCreateProductComponent implements OnInit {

  form: CatalogListModel = new CatalogListModel();
  acceptImageType = ".jpg,.jpeg,.png,.tiff,.gif";
  maxFileSize: number = 5 * 1024 * 1024;
  @ViewChild('productName') productName: InputFieldComponent;
  @ViewChild('productPrice') productPrice: InputFieldComponent;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
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
    if(this.checkVal()){
       this.dialogRef.close({ action: 1, data:this.form })
    }
  }
  checkVal() {
   let valid = true;
    this.productPrice.checkValidate();
    this.productName.checkValidate();
    !this.productName.checkValidate() || !this.productPrice.checkValidate() ? valid = false : '';
    console.log("valid", valid);
    return valid;
  }
}
