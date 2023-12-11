import localFont from "next/font/local"
import "./globals.scss"
import Navbar from "@/components/molecules/navbar/navbar"
import Footer from "@/components/molecules/footer/footer"

const brockmann = localFont({
  src: [
    // bold
    {
      path: "/fonts/brockmann-bold.ttf",
      weight: "700",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-bold.woff",
      weight: "700",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-bold.woff2",
      weight: "700",
      style: "normal"
    },
    // bold italic
    {
      path: "/fonts/brockmann-bolditalic.ttf",
      weight: "700",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-bolditalic.woff",
      weight: "700",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-bolditalic.woff2",
      weight: "700",
      style: "italic"
    },
    // semibold
    {
      path: "/fonts/brockmann-semibold.ttf",
      weight: "600",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-semibold.woff",
      weight: "600",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-semibold.woff2",
      weight: "600",
      style: "normal"
    },
    // semibold italic
    {
      path: "/fonts/brockmann-semibolditalic.ttf",
      weight: "600",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-semibolditalic.woff",
      weight: "600",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-semibolditalic.woff2",
      weight: "600",
      style: "italic"
    },
    // medium
    {
      path: "/fonts/brockmann-medium.ttf",
      weight: "500",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-medium.woff",
      weight: "500",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-medium.woff2",
      weight: "500",
      style: "normal"
    },
    // medium italic
    {
      path: "/fonts/brockmann-mediumitalic.ttf",
      weight: "500",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-mediumitalic.woff",
      weight: "500",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-mediumitalic.woff2",
      weight: "500",
      style: "italic"
    },
    // regular
    {
      path: "/fonts/brockmann-regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "/fonts/brockmann-regular.woff2",
      weight: "400",
      style: "normal"
    },
    // regular italic
    {
      path: "/fonts/brockmann-regularitalic.ttf",
      weight: "400",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-regularitalic.woff",
      weight: "400",
      style: "italic"
    },
    {
      path: "/fonts/brockmann-regularitalic.woff2",
      weight: "400",
      style: "italic"
    }
  ],
  subsets: ["latin"],
  display: "swap",
  variable: "--font",
})

const basierMono = localFont({
  src: [
    {
      path: "/fonts/basiersquaremono-regular-webfont.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "/fonts/basiersquaremono-regular-webfont.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "/fonts/basiersquaremono-regular-webfont.woff2",
      weight: "400",
      style: "normal"
    },
  ],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata = {
  metadataBase: new URL("https://originblank.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: '/og-image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className={`
        ${brockmann.variable} 
        ${basierMono.variable}
      `}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}