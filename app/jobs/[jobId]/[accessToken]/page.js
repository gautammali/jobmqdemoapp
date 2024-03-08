'use client'

import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Page({ params: { accessToken, jobId, designationTitle } }) {

    const router = useRouter()
    useEffect(() => {
        localStorage?.setItem('accessToken', accessToken);
        router.push(`/jobs/${jobId}/${designationTitle}`)
    }, [])


    return (
        <>
            
        </>
    );
}