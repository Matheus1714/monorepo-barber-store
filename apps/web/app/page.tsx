'use client'

import { Loading } from '@/components/loading';
import { redirect } from 'next/navigation'
import { useState } from 'react';

export default function RootPage() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(!loading)
  }, 500)

  if (loading) return <Loading />

  redirect('/auth')
}