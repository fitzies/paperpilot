import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Paperpilot",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7532104853397293"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-stem">
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
