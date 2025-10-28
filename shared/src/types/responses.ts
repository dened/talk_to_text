/**
 * Типы ответов API.
 */
export type ResponseType = 'success' | 'error';

/**
 * Описывает объект сообщения в ответе API.
 */
export interface ResponseMessage {
    type: ResponseType;
    code?: number;
    title: string;
}

/**
 * Унифицированный интерфейс для ответов API.
 * @template T Тип данных, возвращаемых в поле `data`.
 */
export interface ApiResponse<T = any> {
    data?: T;
    message?: ResponseMessage[];
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
