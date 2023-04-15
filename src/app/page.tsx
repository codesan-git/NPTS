'use client'
import { Textarea } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className='text-red-500 text-center'>Welcome To NPTS</p>
      <Textarea resize={'none'} placeholder='Please text anything here...'/>
    </main>
  )
}
