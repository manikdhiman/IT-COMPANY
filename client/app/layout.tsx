import "./globals.css";

export const metadata = {
  title: "IT Company",
  description: "Next-Gen Digital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning true karne se extensions wala error solve ho jata hai
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}