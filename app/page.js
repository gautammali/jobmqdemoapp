'use client'
import { useEffect } from 'react'
export default function Home() {

  useEffect(() => {
    window.location.replace("https://www.jobmq.com/")
  }, [])
  return <h1>Hello, Home page!</h1>;
}
