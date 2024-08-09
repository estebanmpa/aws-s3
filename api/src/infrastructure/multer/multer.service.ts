import multer from "multer";

export abstract class AbstractMulterService {
    abstract upload(data: any): Promise<void>;
}

export class MulterService implements AbstractMulterService {
    private _upload: multer.Multer;
    private _storage: multer.StorageEngine;
    private _fileFilter: any;

    constructor() {
        this._storage = multer.memoryStorage();
        this._fileFilter = (req, file, cb) => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                cb(null, true);
            } else {
                cb(null, false);
            }
        };
        this._upload = multer({ storage: this._storage, fileFilter: this._fileFilter });
    }

    upload = async (data: any): Promise<void> => {
        
    }
}