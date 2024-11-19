import { message } from "antd";
import { makeErrMsg } from "./general";

export const getMessages = async (locale: string) => {
  const messages = {
    ...(await import(`../../public/locales/${locale}/common.json`)).default,
  };

  return messages;
};

type AddMessageParams = {
  error: string | { errors?: Record<string, string>[]; message?: string };
  locale: string;
};

export const addMessage = (params: AddMessageParams): void => {
  message.open({
    type: "error",
    content: makeErrMsg(params),
  });
};
