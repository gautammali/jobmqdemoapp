import JobDetailsHeader from "@/components/Job-details-header";
import JobDetails from "@/components/job-details"
import { getFilesAttachedToJob, getJobs, getSingleJob, userToken } from "@/lib/jobsApi"
import { serverConfiguration } from "@/config/index.constant";
import { redirect,useRouter } from 'next/navigation';

export async function generateMetadata({ params }) {
    const product = params?.slug[0] && await getSingleJob(params.slug[0])
    return {
        title: `${product?.desingnation} - ${product?.companyName}| JOBMQ.COM(Job Message Queue`,
        description: product?.description.slice(0, 50),
        openGraph: {
            title: `${product?.desingnation} - ${product?.companyName} | JOBMQ.COM(Job Message Queue)`,
            description: product?.description.slice(0, 100),
            url: `${serverConfiguration.mainApp}jobs/${product?.id}/${product?.seoDetail?.slugUrl}`,
            locale: product?.seoDetail?.currency,
            site_name: 'Job Message Queue',
        },
    }
}

export async function generateStaticParams() {
    const jobs = await getJobs();

    // slug: [post.id, post?.desingnation?.split(" ").join('-')],
    return jobs?.jobsListingResponses?.map((job) => ({
        params: {
            jobId: job.id,
        },
    }))
}

export default async function Page({ params }) {
    console.log(params)
    const jobId = params.slug[0]
    // if(params && params?.slug?.length === 3 && params.slug[1]){
    //     redirect(`/jobs/${jobId}/${params.slug[1]}`)
    // }
    const data = await getSingleJob(jobId,params.slug[2])
    const fileData = params.slug[2] && await getFilesAttachedToJob(jobId,params.slug[2]);
    const { breadCurmbList, jobPostingSchema } = data || {}
    const itemListElement = breadCurmbList?.itemListElement?.map((item) => {
        return {
            "@type": item.type,
            position: item.position,
            item: { "@id": item?.item, name: item?.name, },
        }
    });
    const jsonOne = {
        '@context': breadCurmbList?.context, "@type": "BreadcrumbList", itemListElement
    }
    const jsonTwo = {
        "@context": jobPostingSchema?.context,
        "@type": jobPostingSchema?.type,
        applicantLocationRequirements: { '@type': jobPostingSchema?.applicantLocationRequirements?.type, name: jobPostingSchema?.applicantLocationRequirements?.name },
        baseSalary: {
            '@type': jobPostingSchema?.baseSalary?.type,
            currency: jobPostingSchema?.baseSalary?.currency,
            value: {
                '@type': jobPostingSchema?.baseSalary?.value?.type,
                minValue: jobPostingSchema?.baseSalary?.value?.minValue,
                maxValue: jobPostingSchema?.baseSalary?.value?.maxValue,
                unitText: jobPostingSchema?.baseSalary?.value?.unitText
            }
        },
        datePosted: jobPostingSchema?.datePosted,
        description: jobPostingSchema?.description,
        educationRequirements: {
            '@type': jobPostingSchema?.educationRequirements?.type,
            credentialCategory: jobPostingSchema?.educationRequirements?.credentialCategory,
        },
        email: jobPostingSchema?.email,
        employmentType: jobPostingSchema?.employmentType,
        experienceRequirements: {
            '@type': jobPostingSchema?.experienceRequirements?.type,
            monthsOfExperience: jobPostingSchema?.experienceRequirements?.monthsOfExperience,
        },
        hiringOrganization: {
            '@type': jobPostingSchema?.hiringOrganization?.type,
            name: jobPostingSchema?.hiringOrganization?.name,
            sameAs: jobPostingSchema?.hiringOrganization?.sameAs,
            logo: jobPostingSchema?.hiringOrganization?.logo,
            url: jobPostingSchema?.hiringOrganization?.url,
        },
        incentiveCompensation: jobPostingSchema?.incentiveCompensation,
        industry: jobPostingSchema?.industry,
        jobBenefits: jobPostingSchema?.jobBenefits,
        jobLocation: {
            '@type': jobPostingSchema?.jobLocation?.type,
            address: {
                '@type': jobPostingSchema?.jobLocation?.address?.type,
                addressCountry: jobPostingSchema?.jobLocation?.address?.addressCountry,
                addressLocality: jobPostingSchema?.jobLocation?.address?.addressLocality,
                addressRegion: jobPostingSchema?.jobLocation?.address?.addressRegion,
            }
        },
        jobLocationType: jobPostingSchema?.jobLocationType,
        occupationalCategory: jobPostingSchema?.occupationalCategory,
        qualifications: jobPostingSchema?.qualifications,
        responsibilities: jobPostingSchema?.responsibilities,
        salaryCurrency: jobPostingSchema?.salaryCurrency,
        skills: jobPostingSchema?.skills,
        specialCommitments: jobPostingSchema?.specialCommitments,
        title: jobPostingSchema?.title,
        validThrough: jobPostingSchema?.validThrough,
        workHours: jobPostingSchema?.workHours,
    }


    return (<>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonOne) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonTwo) }}
        />
        <JobDetailsHeader {...data} />
        <JobDetails data={data} fileData={fileData} />
    </>)
}