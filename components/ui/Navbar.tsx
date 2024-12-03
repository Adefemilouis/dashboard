import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {
     DropdownMenu, 
     DropdownMenuContent, 
     DropdownMenuItem,
      DropdownMenuLabel,
       DropdownMenuSeparator, 
       DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import ThemeToggler from './ThemeToggler'

const Navbar = () => {
  return (
    <div className='bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between'>
     <Link href="/">
     <Image src='/logo.png' alt="traversypress" width={40} height={50}  />
     </Link>
     
     <div className="flex items-center">
      <ThemeToggler />
       
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
        <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' width={50} height={40}/>

        <AvatarFallback className='text-black '>
            BT

        </AvatarFallback>
     </Avatar>


        </DropdownMenuTrigger>
        <DropdownMenuContent className='text-black dark:text-white py-5'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link href="/auth">Logout</Link>
            </DropdownMenuItem>
           
        </DropdownMenuContent>
     </DropdownMenu>

     </div>
     
     
    </div>
  )
}

export default Navbar
