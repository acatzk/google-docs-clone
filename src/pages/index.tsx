import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import Header from '~/components/Header'

const Index: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Docs Clone</title>
      </Head>
      <Header />
    </React.Fragment>
  )
}

export default Index
