'use client';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { serverConfiguration,socialURLS } from '@/config/index.constant'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'next-share'
import { AiOutlineTwitter } from 'react-icons/ai';


export default function Footer() {
    const quoteMessage = 'heck out this job at JOBMQ. Apply now and kickstart your career!';
    return (
        <>
            <div className="bg-cyan-600 w-full h-20">
                <div className="container flex justify-between items-center h-full">
                    <div className="flex gap-3 items-center">

                        <h3 className='text-white font-semibold'>Follow Us</h3>
                        <a href={socialURLS.facebook} target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <FaFacebookF size={20} round={'true'} />
                        </a>
                        <a href={socialURLS.twitter} target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <AiOutlineTwitter size={20} round={'true'} />
                        </a>
                        <a href={socialURLS.linkedin} target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <FaLinkedinIn size={20} round={'true'} />
                        </a>
                        <a href={socialURLS.instagram} target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <FaInstagram size={20} round={'true'} />
                        </a>
                    </div>
                    <div className="flex gap-3 items-center">

                        <h3 className='text-white font-semibold'>Share</h3>
                        <FacebookShareButton url={serverConfiguration.mainApp} quote={quoteMessage}>
                            <div className="border p-1 text-white">
                                <FaFacebookF size={20} round={'true'} />
                            </div>
                        </FacebookShareButton>


                         <TwitterShareButton url={serverConfiguration.mainApp} title={quoteMessage}>
                            <div className="border p-1 text-white">
                                <AiOutlineTwitter size={20} round={'true'} />
                            </div>
                        </TwitterShareButton>

                        <LinkedinShareButton url={serverConfiguration.mainApp} title={quoteMessage}>
                            <div className="border p-1 text-white">
                                <FaLinkedinIn size={20} round={'true'} />
                            </div>
                        </LinkedinShareButton>

                    </div>
                </div>
            </div>
            <footer className="bg-[#091732] bg-site-bg-300 text-white">
                <div className="py-16">
                    <div className="container flex flex-wrap">

                        <div className="basis-full sm:basis-1/4 p-4 flex flex-col gap-2">
                            <Link href={serverConfiguration.mainApp}>
                                <div className="pb-5">
                                    <Image width={200} height={200} src={'/Orignal.png'} alt="" />
                                    {/* <img className='max-w-[200px]' src={JWeb} alt="" /> */}
                                </div>
                            </Link>
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium'>JOB MESSAGE QUEUE</h4>
                            <p className='font-roboto font-normal text-lg'>Serving the community a better open channel to extinct their potential. Job Message Queue deliver the service of Job Messages between the Job Seeker and Job Provider.</p>
                        </div>
                        <div className="basis-full sm:basis-1/4 p-4 ">
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium pb-6'>FOR EMPLOYERS</h4>
                            <div className="flex flex-col gap-2">
                                <Link href={serverConfiguration.mainApp+'businesses/jobs/create'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Post a Job</p></Link>
                                <Link href={serverConfiguration.mainApp+'businesses/profile'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Manage Jobs</p></Link>
                                <Link href={serverConfiguration.mainApp+'jobs/manage-applicants'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Manage Application</p></Link>
                                <Link href={serverConfiguration.mainApp+'contact-us'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Contact us</p></Link>
                            </div>
                        </div>
                        <div className="basis-full sm:basis-1/4 p-4 ">
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium pb-6'>IMPORTANT LINKS</h4>
                            <div className="flex flex-col gap-2">
                                <Link href={serverConfiguration.mainApp+'terms'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Terms of use</p></Link>
                                <Link href={serverConfiguration.mainApp+'privacy'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Privacy Policy</p></Link>
                                <Link href={serverConfiguration.mainApp}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Job Categories Home</p></Link>
                                <Link href={serverConfiguration.mainApp+'about-us'}><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>About us</p></Link>
                            </div>
                        </div>
                        <div className="basis-full sm:basis-1/4 p-4 ">
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium pb-6'>EMIRATISATION CAMPAIGN</h4>
                            <p className='font-roboto font-normal text-lg'><span>Emiratisation Campaign</span> specially desgined for growing Emiratisation Talent Acquisition needs.
                                Its very simple and convenient way to connect with the community and observing the job feeds on daily basis.</p>
                        </div>
                    </div>
                </div>
                <div className="border-t container py-5">
                    <p className='text-center'>© 2018-2024 JobMQ. Designed with  Power by Allelife Consulting.</p>
                </div>
            </footer >
        </>
    );
}
