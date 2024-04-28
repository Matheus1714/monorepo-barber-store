import { ReactNode } from 'react'

import Image from "next/image"

export function AuthLayout({ children }: {
    children: ReactNode,
}) {
  return (
    <div className="h-screen w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] flex items-center justify-center">
      <div className="hidden bg-muted lg:block">
        <Image
          src="/banner.jpeg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="w-full">
            <Image
              src="/logo.png"
              alt="Image"
              width="491"
              height="141"
            />
          </div>
          { children }
        </div>
      </div>
    </div>
  )
}
