// import moment from 'moment';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { serverConfiguration } from '@/config/index.constant';

export async function generateMetadata({ job }) {
    const product = job
    return {
        title: `${product?.seoTitle || 'JOBMQ'} - ${product?.companyName || ''}| JOBMQ.COM(Job Message Queue`,
        description: product?.seoDescription || 'JOBMQ',
        openGraph: {
            title: `${product?.seoTitle} - ${product?.companyName} | JOBMQ.COM(Job Message Queue)`,
            description: product?.seoDescription || 'JOBMQ',
            url: `${serverConfiguration.mainApp}jobs/${product?.id}/${product?.seoDetail?.slugUrl}`,
            locale: product?.seoDetail?.currency,
            site_name: 'Job Message Queue',
        },
    }
}


const JobCard = ({ job }) => {
    const { doc, desingnation,seoTitle, id, description,seoDescription } = job || {}
    return (
        <div className='bg-white hover:drop-shadow-2xl drop-shadow-md transition-all duration-300 ease-linear hover:scale-100 scale-[.99] border flex flex-col gap-1 px-3 py-6 text-sm'>
            <Head>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <link rel="job detail page" href={`${serverConfiguration.mainApp}jobs/apply/${id}`}/>
            </Head>
            <div className="flex items-center justify-between">
                {/* <p>{moment(new Date(doc)).fromNow()}</p> */}
                <div className="flex items-center">
                    <div className="rounded-full p-3 hover:bg-gray-200 transition_1">
                        {/* <AiOutlineStar /> */}
                    </div>
                </div>
            </div>
            <div className="">
                <Link href={`/jobs/${id}`}>
                {/* <Link href={`/jobs/${id}/${desingnation?.split(" ").join('-')}`}> */}
                    <h3 className='text-lg text-primary-800 underline font-medium hover:no-underline'>{desingnation}</h3>
                </Link>
                <p className='text-[#4f4f4f]'>{"Artarmon, NSW"}</p>
                <p className='text-[#4f4f4f]'>{"Permanent position"}</p>
            </div>
            <div className="">
                <div className="text-sm pb-2 text-[#051532] ml-3 innnerHTML" dangerouslySetInnerHTML={{__html : description.slice(0, 350)+ '...' + `<a href="/jobs/${id}/jobmq" style={{ color:"#0076bd",textDecoration:"underline" }}>read more</a>`}}></div>
                {/* <p>{description.slice(0,200)}</p> */}
            </div>
        </div>
    );
};

export default JobCard;