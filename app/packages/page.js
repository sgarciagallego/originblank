import Intro from "@/components/molecules/intro/intro"
import PackagesTable from "@/components/sections/packages/packagesTable"

export const metadata = {
  title: "Our Packages | Origin Blank - Branding Agency",
  description: "",
}

export default function AboutPage() {
  return (
    <>
      <Intro subtitle={"Our Packages"}>
        Expose your canvas
      </Intro>
      <PackagesTable />
    </>
  )
}