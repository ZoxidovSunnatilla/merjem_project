import HomePage from "../src/components/Home"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router" // Import the useRouter hook
import { useEffect } from "react"

export default function Home() {
  const { t } = useTranslation("common")
  const router = useRouter() // Use the useRouter hook to access route information
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.asPath])

  return (
    <div className="relative">
      <HomePage />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}
