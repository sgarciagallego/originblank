import Intro from "@/components/molecules/intro/intro"
import CtaLight from "@/components/atoms/cta/ctaLight"

export const metadata = {
  title: "Thanks! | Origin Blank - Branding Agency",
  description: "",
}

export default function Thanks() {
  return (
    <main>
      <Intro 
        subtitle={"Thank you"} 
        intro={"Your message has safely landed in our inbox and we'll be in touch soon."}
        ctaHref={"/"}
        cta={"Back to home"}
      >
        Gotcha!
      </Intro>
    </main>
  )
}