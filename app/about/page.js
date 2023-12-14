import Intro from "@/components/molecules/intro/intro"
import Statement from "@/components/molecules/statement/statement"
import AboutPrinciples from "@/components/sections/about/principles/aboutPrinciples"
import AboutTeam from "@/components/sections/about/team/aboutTeam"

export const metadata = {
  title: "About Us | Origin Blank - Branding Agency",
  description: "",
}

export default function AboutPage() {
  return (
    <>
      <Intro element="section" subtitle="About us">
        Looking into our origin
      </Intro>
      <Statement element="section" subtitle="For the people">
        Origin Blank is a family-run branding and web agency, pioneering the way for deserving brands who understand that their people come first. We provide direction through strategy, design and digital experience crafted to complement and scale your operation.
      </Statement>
      <AboutTeam />
      <AboutPrinciples />
    </>
  )
}