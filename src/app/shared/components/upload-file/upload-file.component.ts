import { ImageFiles } from './../../models/upload-file.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {
 @Input("label") label: string;
  @Input("isMulti") isMulti: boolean;
  @Input("filesList") filesList: Array<ImageFiles>;
  @Input("canDeleteOld") canDeleteOld: boolean = true;
  @Input("uploadUrl") uploadUrl: string;
  @Input("deleteUrl") deleteUrl: string;
  @Input('canUpload') canUpload: boolean;
  @Input('canDownLoad') canDownload: boolean;
  @Input('appenedName') appenedName: string = '';
  @Input('isOneFileAttach') isOneFileAttach: boolean;
  @Input('maxUpload') maxUpload: number = -1;
  @Input('maxSize') maxSize: number;
  @Input('disabled') disabled: boolean = false;
  @Input('immUpload') immUpload: boolean = false; //immediately upload
  @Input('acceptType') acceptType: string;
  @Input('required') required: boolean = false;
  @Input('hideDelete') hideDelete: boolean;
  @Input('isEdit') isEdit: boolean = true;
  @Input('showLabelSize') showLabelSize: boolean = true;
  @Input('labelDetail') labelDetail: string = "";
  @Output('onEventUpdate') onEventUpdate = new EventEmitter();
  @ViewChild('inputImageFile') inputFile;

  imageClass: string = "image pl-1 pr-1 col-3"
  url;

  cantDelListSize: number;
  errorMsg: string = "Maximum upload file size : 5 MB";
  totalFilesSize: number = 0;
  isShowErr: boolean = false;
  constructor(private dialog: MatDialog,
    private sanitizer: DomSanitizer) { }

  ngOnChanges(value) {
    if (value.disabled) {
      this.disabled = value.disabled.currentValue;
      if (this.disabled) {
        this.isShowErr = false;
      }
    }
  }

  ngOnInit() {
    if (!this.canDeleteOld) {
      this.cantDelListSize = this.filesList.length;
    }

    this.getTotalFilesSize();
  }

  getTotalFilesSize() {
    this.totalFilesSize = 0;
  }

  onFileSelected(event) { // called each time file input changes
    if (event.target.files.length > 0) {
      this.isShowErr = false;
      let fileListSize = event.target.files.length;
      this.getTotalFilesSize();

      for (let i = 0; i < fileListSize; i++) {
        let data = event.target.files[i];
        let fileSize = event.target.files.item(i).size;
        let currentTotalSize = this.totalFilesSize + fileSize;
        if ((fileSize > this.maxSize) || (currentTotalSize > this.maxSize)) {
          this.inputFile.nativeElement.value = '';
          this.isShowErr = true;
          this.errorMsg = "Maximum upload file size : " + this.maxSize / (1024 * 1024) + " MB";
          this.onEventUpdate.emit(false);
          return false;
        } else {
          //push  file data to file array
          if (!this.filesList) {
            this.filesList = [];
          }
          this.renderImage(data, fileSize);

        }
      }
    } else {
      // console.log(this.required)
      if (this.required) {
        this.isShowErr = true;
        this.errorMsg = 'This field is required.'
      }
    }
  }

  renderImage(data, fileSize) {
    var reader = new FileReader();
    reader.readAsDataURL(data); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = reader.result;
      let file = new ImageFiles();
      file.fileName = data.name;
      file.fileId = 0;
      file.fileUrl = this.url;
      file.fileSize = fileSize;
      file.file = data;
      this.filesList.push(file);
      this.getTotalFilesSize();
      this.onEventUpdate.emit({ action: 'file', append: this.appenedName, file: data })
      this.inputFile.nativeElement.value = '';
    }
  }

  getFileFromData(fileSource) {
    // let objectURL = 'data:image/jpeg;base64,' + fileSource;
    let objectURL = fileSource;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }

  onDelete(fileId: number, i: number) {
    this.filesList.splice(i, 1);
      this.getTotalFilesSize();
      this.onEventUpdate.emit({ action: 'delFile', append: this.appenedName, fileId });
  }

  checkValidate() {
    let isValid = true;
    this.isShowErr = false;
    if (this.required && this.filesList.length <= 0 && !this.disabled) {
      isValid = false;
      this.isShowErr = true;
      this.errorMsg = "This field is required."
    }

    return isValid;
  }
}
