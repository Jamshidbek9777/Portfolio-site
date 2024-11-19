import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getMessages } from "@/lib";

export const locales = ["en", "ru", "uz"] as const;
export const localePrefix = "always";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: await getMessages(locale),
  };
});
