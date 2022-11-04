import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { PropsWithChildren } from "react";
import "@/styles/globals.css";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <title>Welcome to Data Charts | Generate Chart in minutes</title>
      </head>
      <body>
        <main className="bg-white">
          <Header />
          <div className="content container">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
