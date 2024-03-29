// import moment from 'moment';
import Link from 'next/link';
import React from 'react';

const JobCard = ({ job }) => {
    const { doc, desingnation, id, description } = job || {}
    return (
        <div className='bg-white hover:drop-shadow-2xl drop-shadow-md transition-all duration-300 ease-linear hover:scale-100 scale-[.99] border flex flex-col gap-1 px-3 py-6 text-sm'>
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
                <p>{description.slice(0,200)}</p>
            </div>
        </div>
    );
};

export default JobCard;