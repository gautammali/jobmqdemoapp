'use client'
import { useEffect } from 'react'
export default function Home() {

  useEffect(() => {
    window.location.replace("jobmqdemoapp.vercel.app/")
  }, [])
  return <h1>Hello, Home page!</h1>;
}
