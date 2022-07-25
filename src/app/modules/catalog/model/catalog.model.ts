import { CoreModel } from "../../../shared/models/core.model";
import { Files, ImageFiles } from "src/app/shared/models/upload-file.model";

export class CatalogListModel extends CoreModel{
    public rowNo: Number = 0
    public catalogId: string = "";
    public catalogName: string = "";
    public catalogPrice: Number = null;
    public catalogDetail: string = "";
    public catalogPicture: ImageFiles[] = [];
}


