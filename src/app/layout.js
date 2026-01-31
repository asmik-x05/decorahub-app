import "./globals.css";

export const metadata = {
  title: "DecoraHub | Your Interior Design Companion",
  description: "Discover the perfect decor ideas and tips for your home with DecoraHub.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
