import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-comfirm',
  templateUrl: './dialog-comfirm.component.html',
  styleUrls: ['./dialog-comfirm.component.scss']
})
export class DialogComfirmComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogComfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
   }
  ngOnInit() {
  }

  onClose(){
    
    this.dialogRef.close(0);
  }

  onConfirm(){
    this.dialogRef.close(1);
  }
}
