import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  console.log(locale);
  return (
    <main>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </main>
  );
}
