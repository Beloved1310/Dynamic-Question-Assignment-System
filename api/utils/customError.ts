class CustomError extends Error {
    status: number;
    constructor(message: any, name: string, status: number) {
      super(message);
      this.name = name;
      this.message = message;
      this.status = status;
    }
  }
  
  export class UnprocessableError extends CustomError {
    constructor(message: any) {
      super(message, 'UnprocessableError', 422);
    }
  }
  
  export class ValidationError extends CustomError {
    constructor(message: any) {
      super(message, 'ValidationError', 400);
    }
  }
  
  export class NotFoundError extends CustomError {
    constructor(message: any) {
      super(message, 'NotFoundError', 404);
    }
  }
  
  export class UnauthorizedError extends CustomError {
    constructor(message: any) {
      super(message, 'UnauthorizedError', 401);
    }
  }
  
  export class ForbiddenError extends CustomError {
    constructor(message: any) {
      super(message, 'ForbiddenError', 403);
    }
  }
  
  export class InternalServerError extends CustomError {
    constructor(message: any) {
      super(message, 'InternalServerError', 500);
    }
  }
  