import { Router } from 'express';
import type { Request, Response } from 'express'; 
import multer from 'multer'; 
import path from 'path';
import type { ApiResponse, ApiErrorResponse, UploadSuccessData } from 'shared';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, 'uploads/'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

const router = Router();

router.post('/', upload.single('audioFile'), (req: Request, res: Response) => {
  if (!req.file) {
    const errorResponse: ApiErrorResponse = {
      success: false,
      error: {
        code: 'FILE_NOT_UPLOADED',
        message: 'Файл не был загружен. Убедитесь, что файл передается в поле "audioFile".',
      },
    };
    return res.status(400).json(errorResponse);
  }

  const responseData: UploadSuccessData = {
    filename: req.file.filename,
    path: req.file.path,
    size: req.file.size,
    mimetype: req.file.mimetype,
    originalname: req.file.originalname,
    destination: req.file.destination,
  };

  const successResponse: ApiResponse<UploadSuccessData> = {
    success: true,
    data: responseData,
    message: 'Файл успешно загружен!',
  };

  res.status(200).json(successResponse);
});

export default router;