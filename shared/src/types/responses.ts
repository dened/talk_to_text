/**
 * Унифицированный интерфейс для успешных ответов API.
 * @template T Тип данных, возвращаемых в ответе.
 */
export interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string; // Опциональное сообщение об успехе
}

/**
 * Унифицированный интерфейс для ответов API с ошибками.
 */
export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;    // Код ошибки (например, 'FILE_NOT_UPLOADED')
    message: string; // Человекочитаемое сообщение об ошибке
    details?: any;   // Опциональные детали ошибки (например, валидационные ошибки)
  };
}

/**
 * Интерфейс для данных, возвращаемых при успешной загрузке файла.
 */
export interface UploadSuccessData {
  filename: string;
  path: string;
  size: number;
  mimetype: string;
  originalname: string;
  destination: string;
}