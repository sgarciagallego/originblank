import HomeAbout from "@/components/sections/home/about/homeAbout"
import HomeIntro from "@/components/sections/home/intro/homeIntro"

export const metadata = {
  title: "Origin Blank | Independent Branding Agency",
  description: "",
}

export default function Home() {
  return (
    <>
      <HomeIntro />
      <HomeAbout />
    </>
  )
}
