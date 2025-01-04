// Importing Metadata type from Next.js for defining page metadata
import type { Metadata } from "next";

// Importing the Inter font from Google Fonts via Next.js
import { Inter } from "next/font/google";

// Importing global CSS styles
import "./globals.css";

// Importing a utility function `cn` for combining class names
import { cn } from "@/lib/utils";

// Importing the Navbar component for the layout
import { Navbar } from "@/components/layout/navbar";

// Importing the ThemeProvider component for theme management
import { ThemeProvider } from "@/components/layout/theme-provider";

// Initializing the Inter font with the "latin" subset
const inter = Inter({ subsets: ["latin"] });

// Defining metadata for the page (used for SEO and social sharing)
export const metadata: Metadata = {
  title: "weDESIGN. - Landing Page", // Page title
  description: "Landing Page for Web Design Agency", // Page description
};

// RootLayout component definition, which wraps the entire application
export default function RootLayout({
  children, // Children prop to render nested components or pages
}: Readonly<{
  children: React.ReactNode; // Type definition for children
}>) {
  return (
    // HTML root element with language set to Brazilian Portuguese
    // `suppressHydrationWarning` is used to suppress hydration warnings for the `html` element
    <html lang="pt-br" suppressHydrationWarning>
      {/* Body element with minimum height set to full screen and background color */}
      {/* `cn` utility is used to combine Tailwind classes and the Inter font class */}
      <body className={cn("min-h-screen bg-background", inter.className)}>
        {/* ThemeProvider component for managing light/dark themes */}
        <ThemeProvider
          attribute="class" // Theme is applied using CSS classes
          defaultTheme="system" // Default theme is system preference
          enableSystem // Enables system theme detection
          disableTransitionOnChange // Disables transition when theme changes
        >
          {/* Navbar component rendered at the top of the page */}
          <Navbar />

          {/* Main content of the page, passed as children */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
