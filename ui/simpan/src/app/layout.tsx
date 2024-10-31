import type { Metadata } from "next";
import { Providers } from "./providers";
import "./global.scss";

export const metadata: Metadata = {
  title: "SimPan",
  description: "SimPan welcome page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}