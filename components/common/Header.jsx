import Image from 'next/image'
import React from 'react'
import UserInfo from './UserInfo'

export default function Header() {
    return (
        <div className='bg-[#091732]'>
            <div className="container flex justify-between items-center p-3 ">
                <a href='https://jobmq.com' className='max-w-[200px]'>
                    <Image width={200} height={200} src={'/Orignal.png'} alt="" />
                </a>
                <UserInfo />
            </div>
        </div>
    )
}
