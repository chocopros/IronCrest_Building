import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IronCrest Building Systems | Pre-Engineered Steel Buildings, Roofing & Panels",
  description: "Industry-leading manufacturer of pre-engineered steel buildings, metal roofing, metal wall panels, and steel building kits. CrestFrame™ Rigid-Frame, IronCore® Cold-Formed, and CrestCoil™ solutions.",
  keywords: "IronCrest, metal buildings, steel buildings, metal roofing, rigid-frame, cold-formed, building kits, steel coils",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-brand-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
