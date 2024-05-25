'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import Loading from "@/components/common/Loading";

export default function Page({ params: { accessToken, jobId } }) {

    const router = useRouter()
    useEffect(() => {
        localStorage?.setItem('accessToken', accessToken);
        router.push(`/jobs/${jobId}`)
    }, [])


    return (
        <>
            <Loading />
        </>
    );
}