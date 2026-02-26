import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en">
    <body>
      {/* This main container limits the width and centers everything */}
      <div className="max-w-2xl mx-auto px-6 py-10">
        

        {children}
      </div>
    </body>
  </html>
);
}
