import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurixo - Precision Engineering for Scalable Solutions",
  description: "Independent full-stack software engineer specializing in web applications, mobile apps, AI solutions, and scalable backend systems.",
  keywords: ["software development", "full-stack", "web applications", "mobile apps", "AI solutions", "backend development"],
  icons: {
    icon: [
      { url: "/brand/favicons/favicon.ico" },
      { url: "/brand/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/brand/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
