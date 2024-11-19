import { message } from "antd";
import { makeErrMsg } from "./general";

export const getMessages = async (locale: string) => {
  const messages = {
    ...(await import(`../../public/locales/${locale}/common.json`)).default,
  };

  return messages;
};

export const addMessage = (params: any): void => {
  message.open({
    type: "error",
    content: makeErrMsg(params),
  });
};
