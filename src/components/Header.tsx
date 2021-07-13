import React from 'react'
import Image from 'next/image'
import Icon from '@material-tailwind/react/Icon'
import Button from '@material-tailwind/react/Button'

const Header: React.FC<{}> = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
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
        className="
          mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 
        text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md
          transition ease-in-out duration-150"
      >
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"
        />
      </div>

      <Button
        color="blue"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="hidden md:block ml-0 md:ml-20 h-12 w-12 border-none"
      >
        <Icon name="apps" size="2xl" color="gray" />
      </Button>

      <div className="flex-shrink-0 mr-3">
        <Image
          width={30}
          height={30}
          alt="Profile Picture"
          className="cursor-pointer rounded-full"
          src="https://avatars.githubusercontent.com/u/38458781?v=4"
        />
      </div>
    </header>
  )
}

export default Header
