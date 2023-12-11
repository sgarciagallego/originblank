import HomeIntro from "@/components/sections/home/intro/homeIntro"
import HomeAbout from "@/components/sections/home/about/homeAbout"
import ServiceTags from "@/components/molecules/tags/services/tags"

export const metadata = {
  title: "Origin Blank | Independent Branding Agency",
  description: "",
}

export default function Home() {
  return (
    <>
      <HomeIntro />
      <ServiceTags />
      <HomeAbout />
    </>
  )
}
