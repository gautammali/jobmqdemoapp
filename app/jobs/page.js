'use client'
// import JobList from "@/components/job-list"
import { useEffect } from "react"
// import { getJobs } from "@/lib/jobsApi"


export default function Page() {
    // const data = await getJobs()
    // push another website link script
    useEffect(() => {
        window.location.replace("https://www.jobmq.com/jobs")
    }, [])
    return;
}