import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jetzt Webseite erstellen lassen",
  description:
    "Sie möchten eine Webseite erstellen lassen? Wir helfen Ihnen dabei! Jetzt unverbindlich anfragen. ✓ Professionell ✓ Individuell ✓ Effizient ✓ Preis-Leistung",
  applicationName: "webseite.jetzt",
  authors: [{ name: "Levi Hessmann", url: "https://levi-hessmann.de/" }],
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Jetzt Webseite erstellen lassen",
    description:
      "Sie möchten eine Webseite erstellen lassen? Wir helfen Ihnen dabei! Jetzt unverbindlich anfragen.",
    siteName: "webseite.jetzt",
    images: [
      {
        url: "/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "webseite.jetzt",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"de"} className={"w-full h-full"}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/nhm6wqy.css" />
      </head>
      <body className={cn(manrope.className, "h-full w-full bg-[#EAE8E1]")}>
        {children}
      </body>
    </html>
  );
}
