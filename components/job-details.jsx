
export default function JobDetails({ data }) {
    const {
        id,
        doc,
        description,
        minSalary,
        maxSalary,
        expirationDate,
        desingnation,
        selectionCriteriaDetails,
        keywordCriteria,
        companyName,
        companyLogo,
        address,
        contactId,
        totalApplications,
        isJobApplied,
        seoDetail,
        jobPostingSchema,
        breadCurmbList,
    } = data || {};
    return (
        <>
            <div className="container">
                <div className="grid sm:grid-cols-12 grid-cols-1 gap-5 my-5">
                    <div className="col-span-8 flex flex-col gap-5">
                        <div className="p-5 border">
                            <h3 className="text-2xl text-[#051532] pb-5">
                                Job description
                            </h3>
                            <p className="pb-7">About this role</p>

                            <p>{description}</p>
                        </div>

                        <div className="border p-5">
                            <h3 className="text-2xl text-[#051532] pb-5">
                                Application Questions
                            </h3>
                            <div className="flex flex-col gap-3">
                                {selectionCriteriaDetails?.map((item, id) => (
                                    <div key={id} className="p-5 border w-full">
                                        <p>{item?.question}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <JobAttechment /> */}
                    </div>
                    <div className="col-span-4">
                        <div className="bg-[#f4f4f4] p-5 h-auto">
                            <h3 className="text-2xl text-[#051532] pb-5">Job Info</h3>
                            <div className="flex flex-col gap-3">
                                {keywordCriteria?.map((item, id) => (
                                    <p key={id} className="font-bold text-base">
                                        {item?.kwName}:{" "}
                                        <span className="font-normal">{item?.kwValueName}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
