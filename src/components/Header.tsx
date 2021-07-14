import React from 'react'
import Image from 'next/image'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'
import { signOut, useSession } from 'next-auth/client'

const Header: React.FC<{}> = () => {
  const [session] = useSession()

  return (
    <header className="sticky top-0 z-50 flex items-center px-2 sm:px-4 py-2 shadow-md bg-white w-full">
      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-12 w-12 border-none flex-shrink-0"
      >
        <Icon name="menu" size="2xl" color="gray" />
      </Button>
      <Icon name="description" size="3xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-xl">Docs</h1>

      <div
        className="mx-2 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 
        text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md"
      >
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-2 text-base bg-transparent outline-none"
        />
      </div>

      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-0 md:ml-20 h-12 w-12 border-none"
      >
        <Icon name="apps" size="2xl" color="gray" />
      </Button>

      <div className="hidden md:block">
        <Image
          width={30}
          height={30}
          alt="Profile Picture"
          className="cursor-pointer rounded-full"
          src={session?.user?.image! || '/images/default-avatar.jpg'}
          onClick={() => signOut()}
        />
      </div>
    </header>
  )
}

export default Header
