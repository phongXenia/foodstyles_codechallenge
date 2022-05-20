export enum SERVER_ERROR {
  INVALID_CREDENTIAL = 'Invalid credentials',
}

const ERROR_MESSAGE = {
  [SERVER_ERROR.INVALID_CREDENTIAL]: 'Email or password is not correct',
};

export const generateErrorMessage = (code: string) => {
  return ERROR_MESSAGE[code as SERVER_ERROR] || 'Something went wrong.';
};
