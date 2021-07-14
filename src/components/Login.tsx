import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { signIn } from 'next-auth/client'
import Button from '@material-tailwind/react/Button'

const Login: React.FC<{}> = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Image
          src="https://links.papareact.com/1ui"
          height={300}
          width={550}
          objectFit="contain"
          alt="Login Image"
        />
        <Button
          color="blue"
          buttonType="filled"
          ripple="ligth"
          className="w-44 mt-10"
          onClick={() => signIn()}
        >
          Login
        </Button>
      </div>
    </React.Fragment>
  )
}

export default Login
