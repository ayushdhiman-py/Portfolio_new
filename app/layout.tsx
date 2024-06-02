import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: "Ayush Dhiman",
  authors: {
    name: "Ayush Dhiman",
  },

  description:
    "Based in India, I'm a Fullstack developer passionate about solving real-life problems and creating modern web applications that users love. I am currently seeking an SDE position to further apply my skills",
  openGraph: {
    title: "Ayush Dhiman",
    description:
      "Based in India, I'm a Fullstack developer passionate about solving real-life problems and creating modern web applications that users love. I am currently seeking an SDE position to further apply my skills",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "Ayush Dhiman",
    images: "/p1.png",
    type: "website",
  },
  keywords: [
    "web developer",
    "aayushdhimann",
    "ayushdhiman",
    "portfolio",
    "sde",
    "SDE",
    "Software engineer",
    " Software developer",
    "Frontend developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
