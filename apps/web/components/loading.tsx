import { useEffect, useState } from 'react'
import Image from "next/image"
import { Label } from '@/components/ui/label'

export function Loading() {
    const [dots, setDots] = useState('');
    const message = 'Carregando'

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(dots.length === 3){
                setDots('')
            } else {
                setDots((state) => state.concat('.'))
            }
        }, 500)

        return () => clearInterval(intervalId);
    }, [dots]);

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="animate-pulse">
                <Image
                    src="/logo.png"
                    alt="Image"
                    width="491"
                    height="141"
                />
            </div>
            <div>
                <Label className="text-xl">{`${message}${dots}`}</Label>
            </div>
        </div>
    )
}