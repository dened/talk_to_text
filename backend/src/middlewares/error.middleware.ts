import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from 'shared';

interface CustomError extends Error {
  status?: number;
  errors?: Record<string, string> | null;
}

const errorMiddleware = (
  err: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const errorResponse: ApiResponse = {
    message: [
      {
        type: 'error',
        code: 500,
        title: err.message || 'Internal Server Error',
      },
    ],
  };

  res.status(err.status || 500).json(errorResponse);
};

export default errorMiddleware;
