import HomeIntro from "@/components/sections/home/intro/homeIntro"
import HomeAbout from "@/components/sections/home/about/homeAbout"
import ServiceTags from "@/components/molecules/tags/services/tags"
import HomeWork from "@/components/sections/home/work/homeWork"
import HomeOfferings from "@/components/sections/home/services/homeOfferings"

export const metadata = {
  title: "Origin Blank | Independent Branding Agency",
  description: "",
}

export default function Home() {
  return (
    <>
      <HomeIntro />
      <HomeWork />
      <HomeAbout />
      <HomeOfferings />
    </>
  )
}
