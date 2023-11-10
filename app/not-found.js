import RootLayout from "./layout"
import Error404 from "@/components/molecules/notFound/error404"

export default function NotFound() {
  return (
    <RootLayout>
      <Error404 />
    </RootLayout>
  )
}