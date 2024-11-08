import type { Metadata } from "next";

import "./global.scss";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "SimPan",
  description: "SimPan welcome page",
};


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {

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