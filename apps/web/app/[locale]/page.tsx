'use client'

import { Loading } from '@/components/loading';
import { redirect } from 'next/navigation'
import { useState } from 'react';

export interface RootPageProps {
  params: {
    locale: string;
  }
}

export default function RootPage(props: RootPageProps) {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(!loading)
  }, 500)

  if (loading) return <Loading />

  redirect(`${props.params.locale}/auth`)
}