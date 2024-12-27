import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Super Folio",
  description: "A portfolio website built with Next.js",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>PORTFOLIO</title>
        {/* Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Coolvetica&display=swap"
            rel="stylesheet"
          />

        {/* Local CSS */}
        <link href="/css/font-awesome/css/all.min.css" rel="stylesheet" />
        <link href="/css/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/aos.css" rel="stylesheet" />
        <link href="/css/main.css" rel="stylesheet" />

        {/* Optional Noscript Fallback for AOS */}
        <noscript>
          <style>{`
            [data-aos] {
              opacity: 1 !important;
              transform: translate(0) scale(1) !important;
            }
          `}</style>
        </noscript>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Page Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
