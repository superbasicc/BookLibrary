import React from 'react'
import '@/styles/globals.css'
import type { AppType } from 'next/app'
import { trpc } from '@/utilities/trpc'
import Layout from './_layout'

const RootApp: AppType = ({ Component, pageProps }) => {
  React.useEffect(() => {
    document.addEventListener(
      'contextmenu', 
      e => e.preventDefault()
    )
  }, [])
  
  return (
    <Layout>
      <Component { ...pageProps } />
    </Layout>
  )
}

export default trpc.withTRPC(RootApp)
