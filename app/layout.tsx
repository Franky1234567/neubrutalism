import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://franky.my.id"),
  title: {
    default: "Franky Rifdulmannan - Frontend Engineer",
    template: "%s | Franky Rifdulmannan",
  },
  description:
    "Frontend engineer building hospitality software in Indonesia. 1 year shipping production code at Guestpedia. Specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Franky Rifdulmannan",
    "Franky",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Indonesia",
    "Sumenep",
    "Guestpedia",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Franky Rifdulmannan", url: "https://franky.my.id" }],
  creator: "Franky Rifdulmannan",
  openGraph: {
    type: "website",
    url: "https://franky.my.id",
    title: "Franky Rifdulmannan - Frontend Engineer",
    description:
      "Frontend engineer building hospitality software in Indonesia. Specializing in React, Next.js, and TypeScript.",
    siteName: "Franky Rifdulmannan",
    images: [{ url: "/logo-.png", width: 512, height: 512, alt: "Franky Rifdulmannan" }],
  },
  twitter: {
    card: "summary",
    title: "Franky Rifdulmannan - Frontend Engineer",
    description:
      "Frontend engineer building hospitality software in Indonesia.",
    images: ["/logo-.png"],
  },
  icons: {
    icon: "/logo-.png",
  },
  verification: {
    google: "S0QdVnoB5Jkfe6AjnfiscGx11TmPQQ5C6dPCROaBUIY",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Franky Rifdulmannan",
              url: "https://franky.my.id",
              email: "frengkyrifdulm@gmail.com",
              jobTitle: "Frontend Engineer",
              worksFor: { "@type": "Organization", name: "Guestpedia" },
              address: { "@type": "PostalAddress", addressLocality: "Sumenep", addressCountry: "ID" },
              sameAs: [
                "https://github.com/Franky1234567",
                "https://www.linkedin.com/in/frankyrifdulmannan/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
