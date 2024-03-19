"use client"

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { FaTwitter, FaTelegram, FaDiscord } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
export default function Navbar() {
    const activeLink = usePathname();
    return (
        <div className="fixed w-full top-0 border-b border-gray-800 bg-black z-50">
            <div className="flex flex-row w-full items-center p-0 mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
                <nav className='flex-1'>
                    <Link href="/" className="text-lg md:text-xl lg:text-2xl text-slate-500">Artela</Link>
                </nav>
                <nav className="flex-1 h-20 w-full flex justify-between items-center">
                    <div className="hidden md:flex text-gray-500">
                        <Link href="/" className={`font-bold hover:text-blue-600 text-sm md:text-base cursor-pointer mr-4 ${activeLink === '/artscriptions' ? 'text-blue-600' : ''}`}>Build</Link>
                        <Link href="/" className={`font-bold hover:text-blue-600 text-sm md:text-base cursor-pointer mr-4 ${activeLink === '/token' ? 'text-blue-600' : ''}`}>Explore</Link>
                        <Link href="/" className={`font-bold hover:text-blue-600 text-sm md:text-base cursor-pointer mr-4 ${activeLink === '/marketplace' ? 'text-blue-600' : ''}`}>Blog</Link>
                    </div>
                    <div className="hidden md:flex text-gray-500">
                        <Link href="https://twitter.com/Art_inscription" className='link-style'><FaTwitter
                            className='link-icon  text-2xl' /></Link>
                        <Link href="" className='link-disabled'><FaTelegram className='link-icon  text-2xl' /></Link>
                        <Link href="" className=''><FaDiscord className='link-style  text-2xl' /></Link>
                    </div>
                    <ConnectButton />
                </nav>
            </div>
        </div>
    );

}
