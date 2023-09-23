type MessageModel = {
  message: string;
  code: number;
};

export class ThrowError extends Error {
  responseData: MessageModel;
  constructor(message: string, responseData: MessageModel) {
    super(message);
    this.responseData = responseData;
  }
}
