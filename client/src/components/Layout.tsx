import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-18">{children}</main>
      <Footer />
    </div>
  );
}
