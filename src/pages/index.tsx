import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import Header from '~/components/Header'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'

const Index: NextPage<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Google Docs Clone</title>
      </Head>
      <Header />
      <section className="bg-gray-200 pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-none rounded-full"
            >
              <Icon name="more_vert" size="2xl" />
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image
                src="https://links.papareact.com/pju"
                alt="Google Docs"
                layout="fill"
              />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Index
