import React from 'react'
import { AiOutlineRight } from "react-icons/ai";
import moment from "moment";


export default function JobDetailsHeader({
    desingnation,
    id,
    doc,
    minSalary,
    maxSalary,
    expirationDate,
    companyName,
    companyLogo,
    address,
    totalApplications,
    isJobApplied,
    handlePostedByJob
}) {
    return (
        <div className="bg-[#f4f4f4] pt-8 pb-4">
            <div className="pt-8 pb-4">
                <div className="container flex justify-between flex-wrap sm:flex-nowrap">
                    <div className="">
                        <div className="flex items-center gap-1 text-sky-600 font-medium cursor-pointer">
                            <a href="https://jobmq.com" className="hover:underline">
                                Home
                            </a>
                            <AiOutlineRight />
                            <a to="https://jobmq.com/jobs" className="hover:underline">
                                Jobs
                            </a>
                        </div>
                        <h1 className="text-2xl md:text-[52px] text-[#051532] pt-5 pb-4">
                            {desingnation}
                        </h1>
                        <p className="text-black font-extrabold">
                            Job Id:{" "}
                            <span className="font-semibold text-black">{id}</span>
                        </p>
                        <p className="text-black font-extrabold">
                            Posted on:{" "}
                            <span className="font-semibold text-black">
                                {moment(new Date(doc)).format("DD MMM YYYY")}
                            </span>
                        </p>
                        <p className="text-black font-extrabold">
                            Salary:{" "}
                            <span className="font-semibold text-black">
                                {minSalary + " - " + maxSalary} {" AED"}
                            </span>
                        </p>
                        <p className="text-black font-extrabold">
                            Expiring on:{" "}
                            <span className="font-semibold text-black">
                                {moment(new Date(expirationDate)).format("DD MMM YYYY")}
                            </span>
                        </p>
                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-3">
                                {isJobApplied ? (<button
                                    type="button"
                                    className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1 cursor-not-allowed"
                                >
                                    Applied
                                </button>) : <a
                                        href={`https://jobmqdemo.netlify.app/jobs/apply/${id}`}
                                    className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                                >
                                    Apply
                                </a>}
                                {/* <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0  sm:w-auto sm:text-lg transition_1"
                    >
                      {" "}
                      <AiOutlineStar />
                      Save Job
                    </button> */}
                            </div>
                            {/* <div className="flex justify-center items-center text-sky-600 gap-2 hover:underline font-semibold cursor-pointer">
                    <BsShareFill />
                    <p>Share this job</p>
                  </div> */}
                        </div>
                    </div>

                    <div className="flex flex-col ">
                        <div className="flex gap-4 justify-between flex-1">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold capitalize">
                                    {companyName}
                                </h2>
                                <h3 className="font-medium">{address}</h3>
                                <h3
                                    className="font-medium capitalize cursor-pointer"
                                    onClick={handlePostedByJob}
                                >
                                    {"posted job by"}
                                </h3>
                            </div>
                            <div className="">
                                <img
                                    src={`https://api.jobmq.com/file/${companyLogo}`}
                                    className={"max-h-14 "}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="">
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1 capitalize"
                            >
                                job applicants ({totalApplications})
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
