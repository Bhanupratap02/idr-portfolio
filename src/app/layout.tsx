// app/layout.tsx

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* <Navbar /> */}
        <main className="pt-4 w-screen">{children}</main>
      </body>
    </html>
  );
}
