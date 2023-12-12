import Intro from "@/components/molecules/intro/intro"
import ContactForm from "@/components/sections/contact/contactForm"

export const metadata = {
  title: "Contact us | Origin Blank - Branding Agency",
  description: "",
}

export default function AboutPage() {
  return (
    <>
      <Intro element="section" subtitle={"Contact us"}>
        Come on, <br />
        let&apos;s collaborate!
      </Intro>
      <ContactForm />
    </>
  )
}