import "./globals.css";

export const metadata = {
  title: "ProductHub - Your One-Stop Product Destination",
  description: "Discover amazing products with our comprehensive catalog. Search, browse, and find the perfect items for your needs.",
  keywords: "products, shopping, e-commerce, catalog, search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
