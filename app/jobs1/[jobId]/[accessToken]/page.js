'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies';
import Loading from "@/components/common/Loading";

export default function Page({ params: { accessToken, jobId } }) {

    const router = useRouter()
    const cookies = useCookies();
    useEffect(() => {
        cookies.set('accessToken', accessToken)
        localStorage?.setItem('accessToken', accessToken);
        router.push(`/jobs/${jobId}`)
    }, [])


    return (
        <>
            <Loading />
        </>
    );
}