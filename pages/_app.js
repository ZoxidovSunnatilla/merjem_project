import "@/styles/globals.css"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import { MantineProvider } from '@mantine/core';
import Header from "../src/components/header"
import "@mantine/carousel/styles.css"
import { appWithTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { ReduxProvider } from "@/src/redux/provider"
import { RouterTransition } from "@/src/components/RouterTransition"



function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
        <MantineProvider withGlobalStyles withNormalizeCSS>
        
                {/* <Header /> */}
                <Component {...pageProps} />

         
          <RouterTransition />
          </MantineProvider>
    </>
  )
}
export default appWithTranslation(App)
