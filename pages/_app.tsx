import '../styles/global.css'

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return <Component {...pageProps} />
}
