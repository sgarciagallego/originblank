import styles from "./page.module.scss"
import CtaLight from "@/components/atoms/cta/ctaLight"

export const metadata = {
  title: "Going Beyond the Aesthetic | Origin Blank",
  description: "",
}

export default function AccessibilityPage() {
  return (
    <main className={`container ${styles.wrapper}`}>
      <div role="doc-subtitle">Accessibility statement</div>
      <h1>Going beyond the aesthetic</h1>
      <blockquote>
        <p>"Design is a word that has come to mean so much that it's also a word that has come to mean nothing."</p>
        <strong>~ Jony Ive</strong>
      </blockquote>
      <p>Here at Origin Blank, we recognise that design extends further than aesthetics; it is a powerful tool that shapes interaction and experience with the sole purpose of solving human problems.</p>
      <p>As part of this belief of ours, we are committed to ensuring that everyone, regardless of ability or disability, can access and enjoy the content and services provided on our website. We understand the importance of inclusivity and strive to create a digital environment that is accessible to all.</p>
      <p>Our team is dedicated to implementing and maintaining accessible design practices, adhering to the Web Content Accessibility Guidelines (WCAG) 2.2, level A and AA, to guarantee a seamless and user-friendly experience for everyone. From the layout and navigation to the content and multimedia elements, we prioritize accessibility at every stage of our website development.</p>
      <p>To achieve this, we regularly review and update our website to meet evolving accessibility standards. We welcome feedback from our users, as it helps us identify areas for improvement and ensures that our commitment to accessibility is reflected in the user experience.</p>
      <CtaLight href="/contact">Contact us</CtaLight>
    </main>
  )
}