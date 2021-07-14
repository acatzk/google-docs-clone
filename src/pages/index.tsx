import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { NextPage } from 'next'
import Login from '~/components/Login'
import Header from '~/components/Header'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { getSession, useSession } from 'next-auth/client'

const Index: NextPage<{}> = () => {
  const [session] = useSession()

  // Check if user is loggedIn, redirect to Login component
  if (!session) return <Login />

  return (
    <React.Fragment>
      <Head>
        <title>Google Docs Clone</title>
      </Head>

      {/* This is the main header */}
      <Header />

      {/* Here where you add new doc file */}
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
          <div className="flex flex-col">
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

      {/* This is where to see history of your own docs */}
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Document</h2>
            <div className="flex items-center space-x-6">
              <p>Date Created</p>
              <Icon name="folder" size="2xl" color="gray" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Index
