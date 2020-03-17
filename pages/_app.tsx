import { createContext } from 'react'
import { useRouter } from 'next/router'
import '../styles/global.css'

export const GeneralContext = createContext<any>({ language: 'en' })

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  const router = useRouter()
  const language = router.query.language || 'en'
  return (
    <GeneralContext.Provider value={{ language }}>
      <Component {...pageProps} />
    </GeneralContext.Provider>
  )
}
