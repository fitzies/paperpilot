import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paper Pilot",
  description: "Humanize your text",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Nav />
          {props.children}
        </Providers>
      </body>
    </html>
  );
}
