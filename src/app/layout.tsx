import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashutosh Dishagat | Full-Stack Developer",
  description: "Official portfolio of Ashutosh Dishagat, a high-performance Full-Stack Developer specialized in MERN, Next.js, and Mobile apps.",
  keywords: ["Ashutosh Dishagat", "Full-Stack Developer", "Web Development", "Next.js", "React", "Node.js", "Flutter", "Strive"],
  openGraph: {
    title: "Ashutosh Dishagat | Full-Stack Developer",
    description: "Official portfolio of Ashutosh Dishagat, specialized in Next.js and high-performance apps.",
    url: "https://ashutosh-dishagat.dev", // Placeholder URL
    siteName: "Ashutosh Dishagat Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Dishagat | Full-Stack Developer",
    description: "Official portfolio of Ashutosh Dishagat.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >

          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

