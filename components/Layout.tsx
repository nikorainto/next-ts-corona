import * as React from 'react'
import Head from 'next/head'
type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="desc123" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <meta name="theme-color" content="#212121" />
      <link rel="icon" type="image/png" href="/static/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon.png" />
      <link rel="manifest" href="/static/manifest.json" />
    </Head>

    {children}
  </>
)
export default Layout
