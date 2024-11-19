import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { NextIntlProvider, StyledComponentsRegistry } from "@/providers";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./global.css";

type LayoutProps = {
  params: { locale: string };
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning Management System",
  description: "Developed by Jamshidbek",
};
export default function RootLayout({
  params: { locale },
  children,
}: LayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextUIProvider>
          <NextIntlProvider locale={locale}>
            <StyledComponentsRegistry>
              <NextThemesProvider attribute="class" defaultTheme="dark">
                {children}
              </NextThemesProvider>
            </StyledComponentsRegistry>
          </NextIntlProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
