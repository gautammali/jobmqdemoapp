'use client'
import { serverConfiguration } from '@/config/index.constant';
import { useEffect } from 'react'
export default function Home() {

  useEffect(() => {
    window.location.replace(serverConfiguration.mainApp)
  }, [])
  return <h1>Hello, Home page!</h1>;
}
