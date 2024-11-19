export const pxToRem = (pxValue: number, baseFontSize: number = 16): string => {
  const remValue = pxValue / baseFontSize;
  return `${remValue}rem`;
};

type ErrorObject = {
  errors?: Record<string, string>[]; // Adjust the shape if `errors` is more specific
  message?: string;
};

type MakeErrMsgParams = {
  error: string | ErrorObject;
  locale: string;
};

export const makeErrMsg = ({ error, locale }: MakeErrMsgParams): string => {
  if (
    typeof error === "object" &&
    "errors" in error &&
    Array.isArray(error.errors)
  ) {
    // @ts-expect
    return error.errors[0][locale];
  }

  if (typeof error === "string") {
    return error;
  }

  return error.message || "Unknown error";
};
