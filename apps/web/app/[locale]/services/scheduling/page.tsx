'use client'

import { useSearchParams } from 'next/navigation'

import { DashLayout } from "@/components/dash-layout";

export default function SchedulingPage() {
    const searchParams = useSearchParams()
    const search = searchParams.getAll('service')

    return (
        <DashLayout
            title="Agendamento"
            page="services"
        >
            {search}
        </DashLayout>
    )
}