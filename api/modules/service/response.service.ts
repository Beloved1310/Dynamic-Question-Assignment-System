import { Response } from 'express' 
export const ResponseService = {
  success(
    res: Response,
    message: string,
    data: any = null,
    meta: any = null,
  ): {} {
    const payload: {
      message: string
      status: boolean
      error: boolean
      data?: any
      meta?: any
    } = {
      message,
      status: true,
      error: false,
    }
    if (data) payload.data = data
    if (meta) payload.meta = meta
    res.status(200).json(payload)
    return {}
  },

  error(
    res: Response,
    message: string,
    statusCode: number = 500,
    data: any = null,
    meta: any = null,
  ): {} {
    const payload: {
      message: string;
      status: boolean;
      error: boolean;
      data?: any;
      meta?: any;
    } = {
      message,
      status: false,
      error: true,
    };
    if (data) payload.data = data;
    if (meta) payload.meta = meta;
    res.status(statusCode).json(payload);
    return {}
  },
}