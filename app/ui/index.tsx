'use client'
import Link from 'next/link';
import React, { useRef } from 'react';
export default function Home() {
    const secondScreenRef = useRef<HTMLDivElement>(null);
    const scrollToSecondScreen = (): void => {
        const navbarHeight: number = 105;

        if (secondScreenRef.current) {
            const secondScreenPosition = secondScreenRef.current.offsetTop;
            window.scrollTo({
                top: secondScreenPosition - navbarHeight, // 减去Navbar的高度以避免遮挡
                behavior: 'smooth',
            });
        }
    };
    return (
        <main>
            <div className="flex flex-col gap-12 items-center p-4 md:w-[1200px] m-auto overflow-hidden">
                <div className="flex min-h-screen flex-col items-center justify-center px-0">
                    <div
                        className="relative flex flex-col place-items-center text-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                        <p className="text-[48px] text-blod">GoPlus SecWareX Task</p>
                        <p className="text-[24px] pt-10">Status: Incomplete</p>
                    </div>
                    <div className="font-mono pt-20">
                        <button onClick={scrollToSecondScreen} className="bg-blue-500 text-white text-[18px] cursor-pointer ml-8 hover:bg-blue-700 duration-200 rounded-lg px-4 py-2">Start</button>
                    </div>
                </div>
                <div ref={secondScreenRef}>
                </div>

                <div className="mt-20 h-40"></div>

            </div>
        </main >
    )
}
