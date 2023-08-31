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
      <body className="font-stem">
        <Nav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
