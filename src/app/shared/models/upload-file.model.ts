import { CoreModel } from './core.model';

export class UploadFileModel extends CoreModel {
}

export class Files extends CoreModel{
    public fileId: number = 0;
    public fileName: string = "";
    public fileSize: number = 0;
    public file: any;
    public fileUrl: string = "";
}

export class ImageFiles extends CoreModel{
    public fileId: number = 0;
    public fileUrl: string = "";
    public fileName: string = "";
    public fileSize: number = 0;
    public file: any;
    public fileSource: any;
}